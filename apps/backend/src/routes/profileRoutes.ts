import express from "express";
import {
  getProfiles,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profileController";
import fileUpload from "../lib/fileUpload";

const router = express.Router();

router.get("/", getProfiles);
router.get("/:id", getProfile);
router.post("/", fileUpload ,createProfile);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

export default router;
