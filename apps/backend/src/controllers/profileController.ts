import { Request, Response } from "express";
import { Request as ExpressRequest } from "express";
import prisma from "../config/prisma.config";
import { Service } from "@prisma/client";
import cloudinary from "cloudinary";
import dataUri from "../lib/dataUri";
import { config } from "../config/config";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Extended Request interface to support file upload
interface RequestWithFile extends ExpressRequest {
  file?: Express.Multer.File;
}

export const getProfiles = async (req: Request, res: Response) => {
  const { service } = req.query;

  try {
    const profiles = await prisma.profile.findMany({
      where: service ? { service: service as Service } : undefined,
    });
    res.status(200).json(profiles);
  } catch (error) {
    console.error("Error fetching profiles:", error);
    res.status(500).json({ error: "Failed to fetch profiles" });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const profile = await prisma.profile.findUnique({ where: { id } });
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
};

export const createProfile = async (req: RequestWithFile, res: Response) => {
  const { userId, service, address, description } = req.body;

  if (!userId || !service || !address || !description) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Check if the user exists before updating
    const userExists = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!userExists) {
      return res.status(404).json({ error: "User not found" });
    }

    // If file is provided, upload to Cloudinary
    if (req.file) {
      const fileUri = dataUri(req.file);
      const uploadCloud = await cloudinary.v2.uploader.upload(fileUri.content || "");

      // Update user with image URL and mark profile as complete
      await prisma.user.update({
        where: { id: userId },
        data: { image: uploadCloud.secure_url, isProfileComplete: true }
      });
    } else {
      // Mark profile as complete if no image is provided
      await prisma.user.update({
        where: { id: userId },
        data: { isProfileComplete: true }
      });
    }

    // Create profile
    const profile = await prisma.profile.create({
      data: {
        userId,
        service: service as Service,
        address,
        description
      },
    });

    res.status(201).json(profile);
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).json({ error: "Failed to create profile" });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { service } = req.body;

  try {
    const profile = await prisma.profile.update({
      where: { id },
      data: { service: service as Service },
    });
    res.status(200).json(profile);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Failed to update profile" });
  }
};

export const deleteProfile = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.profile.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting profile:", error);
    res.status(500).json({ error: "Failed to delete profile" });
  }
};
