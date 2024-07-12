import express, { Router } from "express";
import {
  getJobPosts,
  getJobPost,
  createJobPost,
  updateJobPost,
  deleteJobPost,
} from "../controllers/jobPostController";

const router: Router = express.Router();

router.get("/", getJobPosts);
router.get("/:id", getJobPost);
router.post("/", createJobPost);
router.put("/:id", updateJobPost);
router.delete("/:id", deleteJobPost);

export default router;
