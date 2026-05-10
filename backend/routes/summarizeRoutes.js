import express from "express";

import upload from "../middleware/uploadMiddleware.js";

import { summarizeText } from "../controllers/summarizeController.js";

const router = express.Router();

router.post(
  "/summarize",
  upload.single("file"),
  summarizeText
);

export default router;