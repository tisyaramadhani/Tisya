import { Router } from "express";
import { getMajor, getMajors, deleteMajor, postMajor, updateMajor } from "../controllers/major.controller.js";
const router = Router()
import { verifyToken, isAdmin } from "../middleware/auth.js";

router.get("/major", getMajors)
router.get("/major/:id", getMajor)
router.post("/major/", [verifyToken, isAdmin], postMajor)
router.put("/major/:id", [verifyToken, isAdmin], updateMajor)
router.delete("/major/:id", [verifyToken, isAdmin], deleteMajor)


export default router