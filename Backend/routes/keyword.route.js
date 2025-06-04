import express from "express"
import { createKeyword, getAllKeywords } from "../controllers/keyword.controller.js";

const router = express.Router();


router.post("/",createKeyword);
router.get("/",getAllKeywords);


export default router;