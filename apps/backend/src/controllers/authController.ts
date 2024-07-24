import { Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import validator from "validator";
import prisma from "../config/prisma.config";
import { sendEmail } from "../lib/emailService";
import { sendOTP } from "../lib/otpService";
import { createToken } from "../lib/tokenConfig";

export const register = async (req: Request, res: Response) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    return res.status(400).json({ message: "All fields must be filled" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Email is not valid" });
  }
  try {
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await prisma.$transaction(async (prisma) => {
      const newUser = await prisma.user.create({
        data: { name, email, password: hash, phone },
      });

      const token = createToken(newUser.id);
      return { user: newUser, token };
    });
    await sendEmail(user.user.id);
    return res
      .status(200)
      .json({ success: true, message: "Verification email sent" });
  } catch (error) {
    console.error("Registration error:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res.status(400).json({ message: error.message, success: false });
    } else {
      return res
        .status(500)
        .json({ message: "Registration failed.", success: false });
    }
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  const { token } = req.query;
  const { userId } = req.params;
  if (!token || typeof token !== "string")
    return res.status(400).send("Token not provided or invalid");

  const verificationToken = await prisma.oTP.findFirst({
    where: { otp: token },
  });
  if (!verificationToken)
    return res.status(404).json({ success: false, message: "Invalid token" });

  if (verificationToken.expiresAt < new Date())
    return res
      .status(400)
      .json({ success: false, message: "Token has expired" });

  if (verificationToken.authorId !== userId) {
    return res.status(403).json({ success: false, message: "Unauthorized" });
  }

  await prisma.user.update({
    where: { id: verificationToken.authorId },
    data: { isVerified: true },
  });

  await prisma.oTP.delete({ where: { id: verificationToken.id } });

  res.status(200).send({
    success: true,
    message: "Verified User! Our frontend page will be ready soon!",
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    if (!user.isVerified) {
      await sendEmail(user.id);
      return res.status(200).json({
        success: true,
        message: "At First Verify Your Email,A Verification email sent.",
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Invalid credentials");
    }
    await sendOTP(user.id);

    return res.status(200).json({
      message: "OTP Send successfull!",
      success: true,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Login failed.", success: false });
  }
};

export const verifyOTP = async (req: Request, res: Response) => {
  const { token } = req.query;
  const { userId } = req.params;
  if (!token || typeof token !== "string")
    return res.status(400).send("Token not provided or invalid");
  let email = userId;
  const userData = await prisma.user.findUnique({ where: { email } });
  console.log(userData);
  if(!userData){
    return res.status(400).json({ success: false, message: "User Not Found!" });
  }  

  const verificationToken = await prisma.oTP.findFirst({
    where: { otp: token, authorId: userData.id },
  });
  if (!verificationToken)
    return res.status(404).json({ success: false, message: "Invalid token" });

  if (verificationToken.expiresAt < new Date())
    return res
      .status(400)
      .json({ success: false, message: "Token has expired" });

  await prisma.oTP.delete({ where: { id: verificationToken.id } });
  const user = await prisma.user.findUnique({
    where: { id: verificationToken.authorId },
  });
  if (!user) {
    return res.status(400).json({ success: false, message: "User Not Found!" });
  }
  const jwttoken = createToken(verificationToken.authorId);
  return res.status(200).json({
    message: "Login successful!",
    success: true,
    token: jwttoken,
    email: user.email,
    id: user.id,
    name: user.name,
    image: user.image
  });
};
