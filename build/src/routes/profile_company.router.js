import { Router } from "express";
import { deleteProfileCompany, getProfileCompany, getProfileCompanys, postProfileCompany, updateProfileCompany } from "../controllers/profil_company.controller.js";
import { verifyToken, isAdmin } from "../middleware/auth.js";
const router = Router()

router.get("/profile-company", getProfileCompanys)
router.get("/profile-company/:id", getProfileCompany)
router.post("/profile-company", [verifyToken, isAdmin], postProfileCompany)
router.put("/profile-company/:id", [verifyToken, isAdmin], updateProfileCompany)
router.delete("/profile-company/:id", [verifyToken, isAdmin], deleteProfileCompany)

export default router