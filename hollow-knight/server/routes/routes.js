import express from "express";
import path from "path";

import { fileURLToPath } from "url";

import hollow_knights from "../data/hollow-knight.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(hollow_knights);
});

router.get("/bosses", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/knight.html"));
});

router.get("/:knightId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/knight.html"));
});
export default router;
