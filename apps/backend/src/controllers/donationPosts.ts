import { Request, Response } from "express";
import prisma from "../config/prisma.config";
import cloudinary from "cloudinary";
import dataUri from "../lib/dataUri";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface RequestWithFile extends Request {
  file?: Express.Multer.File;
}

export const getAllDonationPosts = async (req: Request, res: Response) => {
  try {
    const donationPosts = await prisma.donationPosts.findMany();
    res.json(donationPosts);
  } catch (error) {
    console.error("Error fetching donation posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createDonationPost = async (req: RequestWithFile, res: Response) => {
  try {
    const { donationType, authorId, location, status, fixerId } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "File not provided" });
    }

    const fileUri = dataUri(req.file);
    const uploadCloud = await cloudinary.v2.uploader.upload(fileUri.content || "");

    const newDonationPost = await prisma.donationPosts.create({
      data: {
        donationType,
        donationImage: uploadCloud.secure_url,
        authorId,
        location,
        status,
        fixerId,
      },
    });

    res.status(201).json(newDonationPost);
  } catch (error) {
    console.error("Error creating donation post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getDonationPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const donationPost = await prisma.donationPosts.findUnique({
      where: { id },
    });

    if (!donationPost) {
      return res.status(404).json({ error: "Donation post not found" });
    }

    res.json(donationPost);
  } catch (error) {
    console.error("Error fetching donation post by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateDonationPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { donationType, donationImage, authorId, location, status, fixerId } = req.body;

    const updatedDonationPost = await prisma.donationPosts.update({
      where: { id },
      data: {
        donationType,
        donationImage,
        authorId,
        location,
        status,
        fixerId,
      },
    });

    res.json(updatedDonationPost);
  } catch (error) {
    console.error("Error updating donation post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteDonationPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.donationPosts.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting donation post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
