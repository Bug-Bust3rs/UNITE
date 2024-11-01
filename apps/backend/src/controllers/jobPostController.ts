import { Request, Response } from "express";
import prisma from "../config/prisma.config";
import { Service, Status } from "@prisma/client";

export const getJobPosts = async (req: Request, res: Response) => {
  const { jobType, status, location } = req.query;

  const filters: {
    jobType?: Service;
    status?: Status;
    location?: { contains: string; mode: "insensitive" };
  } = {};

  if (jobType) {
    filters.jobType = jobType as Service;
  }
  if (status) {
    filters.status = status as Status;
  }
  if (location) {
    filters.location = { contains: location as string, mode: "insensitive" };
  }

  try {
    const jobPosts = await prisma.jobPost.findMany({
      where: Object.keys(filters).length ? filters : undefined,
      include: {
        author: true,
      },
    });
    res.status(200).json(jobPosts);
  } catch (error) {
    console.error("Error fetching job posts:", error);
    res.status(500).json({ error: "Failed to fetch job posts" });
  }
};

export const getJobPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const jobPost = await prisma.jobPost.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
    if (!jobPost) {
      return res.status(404).json({ error: "Job post not found" });
    }
    res.status(200).json(jobPost);
  } catch (error) {
    console.error("Error fetching job post by ID:", error);
    res.status(500).json({ error: "Failed to fetch job post" });
  }
};

export const createJobPost = async (req: Request, res: Response) => {
  const { jobType, jobDescription, authorId, location } = req.body;
  try {
    const jobPost = await prisma.jobPost.create({
      data: {
        jobType: jobType as Service,
        jobDescription,
        authorId,
        location,
      },
    });
    res.status(201).json(jobPost);
  } catch (error) {
    console.error("Error creating job post:", error);
    res.status(500).json({ error: "Failed to create job post" });
  }
};

export const updateJobPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { jobType, jobDescription, location, status } = req.body;
  try {
    const jobPost = await prisma.jobPost.update({
      where: { id },
      data: {
        jobType: jobType ? (jobType as Service) : undefined,
        jobDescription,
        location,
        status: status ? (status as Status) : undefined,
      },
    });
    res.status(200).json(jobPost);
  } catch (error) {
    console.error("Error updating job post:", error);
    res.status(500).json({ error: "Failed to update job post" });
  }
};

export const deleteJobPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.jobPost.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting job post:", error);
    res.status(500).json({ error: "Failed to delete job post" });
  }
};
