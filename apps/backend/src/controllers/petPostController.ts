import { Request, Response } from "express";
import { Request as ExpressRequest } from "express";
import prisma from "../config/prisma.config";
import cloudinary from "cloudinary";
import dataUri from "../lib/dataUri";




cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



// @ts-ignore
interface RequestWithFile extends ExpressRequest {
  file: unknown;
}



export const getAllPetPosts = async (req: Request, res: Response) => {
  try {
    const petPosts = await prisma.petsPost.findMany();
    res.json(petPosts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createPetPost = async (req: RequestWithFile, res: Response) => {
  try {
    const { petType, authorId, location, status, fixerId } = req.body;
    const file = req.file;
    // @ts-ignore
    const fileUri = dataUri(file);
    // @ts-ignore
    const uploadCloud = await cloudinary.v2.uploader.upload(fileUri.content);
    const newPetPost = await prisma.petsPost.create({
      data: {
        petType,
        petImage : uploadCloud.secure_url,
        authorId,
        location,
        status,
        fixerId,
      },
    });
    res.status(201).json(newPetPost);
  } catch (error) {
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
      res.status(404).json({ error: "PetPost not found" });
    } else {
      res.json(petPost);
    }
  } catch (error) {
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
    res.status(500).json({ error: "Internal Server Error" });
  }
};
