import express from "express";
import router from "express";
const healthController = require("../controller/healthController");

router.get("/", healthController.getHealth);

export const healthRoute = router;
