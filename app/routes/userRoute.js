import { getUserById, createUser } from "../controller/userController.js";
import router from "express";

router.get("/:id", getUserById);
router.post("/", createUser);

export const userRoute = router;
