import { Router } from "express";
import { getSkill, getSkills, deleteSkill, postSkill, updateSkill } from "../controllers/skill.controller.js";
const router = Router()
import { verifyToken, isAdmin } from "../middleware/auth.js";

router.get("/skill", getSkills)
router.get("/skill/:id", getSkill)
router.post("/skill/", [verifyToken, isAdmin], postSkill)
router.put("/skill/:id", [verifyToken, isAdmin], updateSkill)
router.delete("/skill/:id", [verifyToken, isAdmin], deleteSkill)


export default router