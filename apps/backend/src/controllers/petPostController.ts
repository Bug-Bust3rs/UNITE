import { Request, Response } from "express";
import { Request as ExpressRequest } from "express";
import prisma from "../config/prisma.config";
import cloudinary from "cloudinary";
import dataUri from "../lib/dataUri";

// Configure Cloudinary with environment variables
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Extended Request interface to support file upload
interface RequestWithFile extends ExpressRequest {
  file?: Express.Multer.File;
}

export const getAllPetPosts = async (req: Request, res: Response) => {
  try {
    const petPosts = await prisma.petsPost.findMany();
    res.json(petPosts);
  } catch (error) {
    console.error("Error fetching all pet posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createPetPost = async (req: RequestWithFile, res: Response) => {
  try {
    const { petType, authorId, location, status, fixerId } = req.body;

    // Ensure the file is present and handle the data URI transformation
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const fileUri = dataUri(req.file);
    const uploadCloud = await cloudinary.v2.uploader.upload(fileUri.content || "");

    const newPetPost = await prisma.petsPost.create({
      data: {
        petType,
        petImage: uploadCloud.secure_url,
        authorId,
        location,
        status,
        fixerId,
      },
    });
    res.status(201).json(newPetPost);
  } catch (error) {
    console.error("Error creating pet post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getPetPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const petPost = await prisma.petsPost.findUnique({
      where: { id },
    });
    if (!petPost) {
      return res.status(404).json({ error: "Pet post not found" });
    }
    res.json(petPost);
  } catch (error) {
    console.error("Error fetching pet post by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updatePetPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { petType, petImage, authorId, location, status, fixerId } = req.body;

    const updatedPetPost = await prisma.petsPost.update({
      where: { id },
      data: { petType, petImage, authorId, location, status, fixerId },
    });
    res.json(updatedPetPost);
  } catch (error) {
    console.error("Error updating pet post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deletePetPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.petsPost.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting pet post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
