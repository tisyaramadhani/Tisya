import { Router } from "express";
import { getCertification, getCertifications, deleteCertification, postCertification, updateCertification } from "../controllers/certification.controller.js";
const router = Router()
import { verifyToken, isAdmin } from "../middleware/auth.js";

router.get("/certification", getCertifications)
router.get("/certification/:id", getCertification)
router.post("/certification/", [verifyToken, isAdmin], postCertification)
router.put("/certification/:id", [verifyToken, isAdmin], updateCertification)
router.delete("/certification/:id", [verifyToken, isAdmin], deleteCertification)


export default router