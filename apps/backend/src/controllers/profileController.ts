import { Request, Response } from "express";
import prisma from "../config/prisma.config";
import { Service } from "@prisma/client";

export const getProfiles = async (req: Request, res: Response) => {
  const { service } = req.query;

  try {
    const profiles = await prisma.profile.findMany({
      where: service ? { service: service as Service } : undefined,
    });
    res.status(200).json(profiles);
  } catch (error) {
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
    res.status(500).json({ error: "Failed to fetch profile" });
  }
};

export const createProfile = async (req: Request, res: Response) => {
  const { userId, service } = req.body;
  try {
    const profile = await prisma.profile.create({
      data: {
        userId,
        service,
      },
    });
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ error: "Failed to create profile" });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { service } = req.body;
  try {
    const profile = await prisma.profile.update({
      where: { id },
      data: { service },
    });
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: "Failed to update profile" });
  }
};

export const deleteProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.profile.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete profile" });
  }
};
