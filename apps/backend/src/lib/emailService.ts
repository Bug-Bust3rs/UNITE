import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import { config } from "../config/config";
import prisma from "../config/prisma.config";

export const sendEmail = async (userId: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.EMAIL,
      pass: config.PASSWORD,
    },
  });

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.id) {
      throw new Error("User or user ID is Not Found!");
    }
    const token = uuidv4();
    await prisma.oTP.create({
      data: {
        authorId: user.id,
        otp: token,
      },
    });

    const verificationLink = `${config.FRONTENDURL}/verify-email/${user.id}/?token=${token}`;
    if (!user) throw new Error("User not found");
    console.log(user.email);
    const mailOptions = {
      from: "puskarroy300@gmail.com",
      to: user.email,
      subject: "Verify Your Email",
      html: ` <h2 style="font-family: Arial, sans-serif; line-height: 1.6;">Hey ${user.name} 👋, Thank you for signing up! To complete the authentication process and access your account, please verify your email address by clicking the link below - </h2>
  <p><a href="${verificationLink}" style="color: #007bff; text-decoration: none;">Verify Email Address</a></p>
  <h4 style="font-family: Arial, sans-serif; line-height: 1.6;">Please note that this link will expire in 10 minutes. If you did not request this verification, you can safely ignore this email.</h4>
  <h3 style="font-family: Arial, sans-serif; line-height: 1.6;">Thank you,<br>Puskar Roy - E learning Platform!</h3>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
