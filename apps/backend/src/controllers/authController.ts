import { Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Request, Response, RequestHandler } from "express";
import validator from "validator";
import prisma from "../config/prisma.config";
import { sendEmail } from "../lib/emailService";
import { sendOTP } from "../lib/otpService";
import { createToken } from "../lib/tokenConfig";

export const register: RequestHandler = async (req: Request, res: Response) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    res.status(400).json({ message: "All fields must be filled" });
    return;
  }
  if (!validator.isEmail(email)) {
    res.status(400).json({ message: "Email is not valid" });
    return;
  }

  try {
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      res.status(400).json({ message: "Email already in use" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    // @ts-ignore
    const user = await prisma.$transaction(async (prisma: Prisma) => {
      const newUser = await prisma.user.create({
        data: { name, email, password: hash, phone },
      });
      const token = createToken(newUser.id);
      return { user: newUser, token };
    });

    await sendEmail(user.user.id);
    res.status(200).json({ success: true, message: "Verification email sent" });
  } catch (error: unknown) {
    console.error("Registration error:", error);
    if (error) {
      res.status(400).json({ message: error, success: false });
    } else if (error instanceof Error) {
      res.status(500).json({ message: error.message, success: false });
    } else {
      res.status(500).json({ message: "Registration failed.", success: false });
    }
  }
};

export const verifyEmail: RequestHandler = async (req: Request, res: Response) => {
  const { token } = req.query;
  const { userId } = req.params;

  if (!token || typeof token !== "string") {
    res.status(400).send("Token not provided or invalid");
    return;
  }

  const verificationToken = await prisma.oTP.findFirst({
    where: { otp: token },
  });
  if (!verificationToken) {
    res.status(404).json({ success: false, message: "Invalid token" });
    return;
  }

  if (verificationToken.expiresAt < new Date()) {
    res.status(400).json({ success: false, message: "Token has expired" });
    return;
  }

  if (verificationToken.authorId !== userId) {
    res.status(403).json({ success: false, message: "Unauthorized" });
    return;
  }

  await prisma.user.update({
    where: { id: verificationToken.authorId },
    data: { isVerified: true },
  });

  await prisma.oTP.delete({ where: { id: verificationToken.id } });

  res.status(200).json({
    success: true,
    message: "Verified User! Our frontend page will be ready soon!",
  });
};

export const login: RequestHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "All fields must be filled" });
    return;
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }
    if (!user.isVerified) {
      await sendEmail(user.id);
      res.status(200).json({
        success: true,
        message: "Verify your email first. A verification email has been sent.",
      });
      return;
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    await sendOTP(user.id);
    res.status(200).json({ message: "OTP sent successfully!", success: true });
  } catch (error: unknown) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed.", success: false });
  }
};

export const verifyOTP: RequestHandler = async (req: Request, res: Response) => {
  const { token } = req.query;
  const { userId } = req.params;

  if (!token || typeof token !== "string") {
    res.status(400).send("Token not provided or invalid");
    return;
  }

  const userData = await prisma.user.findUnique({ where: { email: userId } });
  if (!userData) {
    res.status(400).json({ success: false, message: "User Not Found!" });
    return;
  }

  const verificationToken = await prisma.oTP.findFirst({
    where: { otp: token, authorId: userData.id },
  });
  if (!verificationToken) {
    res.status(404).json({ success: false, message: "Invalid token" });
    return;
  }

  if (verificationToken.expiresAt < new Date()) {
    res.status(400).json({ success: false, message: "Token has expired" });
    return;
  }

  await prisma.oTP.delete({ where: { id: verificationToken.id } });

  const user = await prisma.user.findUnique({
    where: { id: verificationToken.authorId },
  });
  if (!user) {
    res.status(400).json({ success: false, message: "User Not Found!" });
    return;
  }

  const jwttoken = createToken(verificationToken.authorId);
  res.status(200).json({
    message: "Login successful!",
    success: true,
    token: jwttoken,
    email: user.email,
    id: user.id,
    name: user.name,
    image: user.image,
    isProfileComplete: user.isProfileComplete,
  });
};
