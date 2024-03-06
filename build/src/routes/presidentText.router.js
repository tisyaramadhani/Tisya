import { Router } from "express";
import { deletePresidentText, getPresidentText, getPresidentTexts, postPresidentText, updatePresidentText } from "../controllers/presidentText.controller.js";
import { verifyToken, isAdmin } from "../middleware/auth.js";
const router = Router()

router.get("/president-text", getPresidentTexts)
router.get("/president-text/:id", getPresidentText)
router.post("/president-text", [verifyToken, isAdmin], postPresidentText)
router.put("/president-text/:id", [verifyToken, isAdmin], updatePresidentText)
router.delete("/president-text/:id", [verifyToken, isAdmin], deletePresidentText)

export default router