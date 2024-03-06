import { getJobs, getJob, postJob, updateJob, deleteJob } from "../controllers/job.controller.js";
import { verifyToken, isAdmin } from "../middleware/auth.js";
import { Router } from "express";
const router = Router()

router.get("/job", getJobs)
router.get("/job/:id", getJob)
router.post("/job", [verifyToken, isAdmin], postJob)
router.put("/job/:id", [verifyToken, isAdmin], updateJob)
router.delete("/job/:id", [verifyToken, isAdmin], deleteJob)

export default router