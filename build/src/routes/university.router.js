import { Router } from "express";
import { getUniversity, getUniversities, deleteUniversity, postUniversity, updateUniversity } from "../controllers/university.controller.js";
const router = Router()
import { verifyToken, isAdmin } from "../middleware/auth.js";

router.get("/university", getUniversities)
router.get("/university/:id", getUniversity)
router.post("/university/", [verifyToken, isAdmin], postUniversity)
router.put("/university/:id", [verifyToken, isAdmin], updateUniversity)
router.delete("/university/:id", [verifyToken, isAdmin], deleteUniversity)


export default router