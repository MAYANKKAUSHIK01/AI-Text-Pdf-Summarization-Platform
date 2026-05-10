import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import summarizeRoutes from "./routes/summarizeRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://ai-text-pdf-summarization-platform.vercel.app/",
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Summarizer Backend Running");
});

app.use("/api", summarizeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});