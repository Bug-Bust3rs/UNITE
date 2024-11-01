import { Request, Response } from "express";
import prisma from "../config/prisma.config";

export const getUser = async (req: Request, res: Response) => {
    

    const users = await prisma.user.findMany();
    res.status(201).json(users
    );
};



export const getUserData = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const profile = await prisma.user.findUnique({ where: { id } });
      if (!profile) {
       res.status(404).json({ error: "User not found" });
       return;
      }
      res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  };

// update the user
export const updateUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const { name, email, password, phone, location } = req.body;

    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            name,
            email,
            password,
            phone,
            location
        },
    });
   res.status(201).json({
        message: "User data updated"
    });
};

//delete the User
export const deleteUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
        await prisma.user.delete({
            where: {
                id: userId
            }
        });
         res.status(404).json({ message: 'User not found' });
    } catch (error) {
        res.status(200).json({ message: 'user deleted!' });
    }


};
