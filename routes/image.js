import express from 'express';
import { createImage } from "../controllers/image.js";

const router = express.Router(); 

//http://localhost:8081/api/images/
router.post("/", createImage)

export default router;