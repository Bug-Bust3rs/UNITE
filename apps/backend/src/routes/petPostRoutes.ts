import { Router } from "express";
import {
  getAllPetPosts,
  createPetPost,
  getPetPostById,
  updatePetPost,
  deletePetPost,
} from "../controllers/petPostController";
import fileUpload from "../lib/fileUpload";
const router = Router();

router.get("/", getAllPetPosts);
// @ts-ignore
router.post("/", fileUpload, createPetPost);
router.get("/:id", getPetPostById);
router.put("/:id", updatePetPost);
router.delete("/:id", deletePetPost);

export default router;
