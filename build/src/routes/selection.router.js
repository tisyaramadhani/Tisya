import { Router } from "express";
import { deleteSelection, getSelection, getSelections, postSelection, updateSelection } from "../controllers/selection.controller.js";
const router = Router()
import { verifyToken, isAdmin } from "../middleware/auth.js";

router.get("/selection", getSelections)
router.get("/selection/:id", getSelection)
router.post("/selection", [verifyToken, isAdmin], postSelection)
router.put("/selection/:id", [verifyToken, isAdmin], updateSelection)
router.delete("/selection/:id", [verifyToken, isAdmin], deleteSelection)

export default router