import express from "express";
import { getUserById, createUser } from "../controller/userController.js";
const router = express.Router();

router.get("/:id", getUserById);
router.post("/", createUser);

export const userRoute = router;
