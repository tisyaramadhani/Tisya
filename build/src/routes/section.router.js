import { Router } from "express";
import { isAdmin, verifyToken } from "../middleware/auth.js";
import {
  deleteSection,
  getSection,
  getSections,
  postSection,
  updateSection,
} from "../controllers/section.controller.js";
const router = Router();

router.get("/section", getSections);
router.get("/section/:id", getSection);
router.post("/section", [verifyToken, isAdmin], postSection);
router.put("/section/:id", [verifyToken, isAdmin], updateSection);
router.delete("/section/:id", [verifyToken, isAdmin], deleteSection);

export default router;
