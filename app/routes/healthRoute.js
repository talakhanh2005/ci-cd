import express from "express";
import { getHealth } from "../controller/healthController.js";
const router = express.Router();

router.get("/", getHealth);

export const healthRoute = router;
