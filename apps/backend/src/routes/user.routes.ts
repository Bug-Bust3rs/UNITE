import express, { Router } from "express";
import { deleteUser, updateUser , getUser} from "../controllers/users.controllers";
const router: Router = express.Router();

router.put("/user/:id", updateUser);
router.get("/user", getUser);
router.delete("/user/:id", deleteUser);
export default router;
