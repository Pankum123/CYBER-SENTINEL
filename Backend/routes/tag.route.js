import express from "express";
import { createTag, getAllTags } from "../controllers/tag.controller.js";
const router = express.Router();

router.post("/",createTag);
router.get("/",getAllTags);

export default router;