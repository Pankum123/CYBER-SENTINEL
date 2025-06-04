import express from "express";
import { createPlatform, getAllPlatforms } from "../controllers/platform.controller.js";
const router = express.Router();

router.post("/",createPlatform);
router.get("/",getAllPlatforms);

export default router;