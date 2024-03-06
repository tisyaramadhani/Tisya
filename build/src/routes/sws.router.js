import { Router } from "express";
import { deleteSWS, getSWS, getSWSs, postSWS, updateSWS } from "../controllers/sws.controller.js";
const router = Router()
import { verifyToken, isAdmin } from "../middleware/auth.js";

router.get("/sws", getSWSs)
router.get("/sws/:id", getSWS)
router.post("/sws", [verifyToken, isAdmin], postSWS)
router.put("/sws/:id", [verifyToken, isAdmin], updateSWS)
router.delete("/sws/:id", [verifyToken, isAdmin], deleteSWS)

export default router