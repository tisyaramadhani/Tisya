import { Router } from "express";
import { deleteRunningText, getRunningText, getRunningTexts, postRunningText, updateRunningText } from "../controllers/runningText.controller.js";
import { verifyToken, isAdmin } from "../middleware/auth.js";
const router = Router()

router.get("/running-text", getRunningTexts)
router.get("/running-text/:id", getRunningText)
router.post("/running-text", [verifyToken, isAdmin], postRunningText)
router.put("/running-text/:id", [verifyToken, isAdmin], updateRunningText)
router.delete("/running-text/:id", [verifyToken, isAdmin], deleteRunningText)

export default router