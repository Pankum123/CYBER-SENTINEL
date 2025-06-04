import express from "express";
import { createPost, getPostsByKeyword, getTopUsersByKeyword, getPlatformStatsByKeyword } from "../controllers/post.controller.js";

const router = express.Router();


router.post('/', createPost);
router.get('/', getPostsByKeyword);
router.get('/top-users', getTopUsersByKeyword);
router.get('/platform-stats', getPlatformStatsByKeyword);

export default router;