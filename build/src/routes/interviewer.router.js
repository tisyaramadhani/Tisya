import { Router } from "express";
import { deleteInterviewer, getInterviewer, getInterviewers, postInterviewer, signin, signout, updateInterviewer } from "../controllers/interviewer.controller.js";
const router = Router()

router.get("/interviewer", getInterviewers)
router.get("/interviewer/:id", getInterviewer)
router.get("/interviewer/", postInterviewer)
router.put("/interviewer/:id", updateInterviewer)
router.delete("/interviewer/:id", deleteInterviewer)
router.get("/signout", signout)
router.post("/signin", signin)

export default router