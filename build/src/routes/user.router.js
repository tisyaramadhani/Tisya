import { Router } from "express";
import {
  deleteUser,
  forgotPassword,
  changePasswordUser,
  getInterviewer,
  getLinkForgotPassword,
  getUser,
  getUsers,
  postInterviewer,
  sendLinkForgotPassword,
  signin,
  signinUser,
  signout,
  signup,
  updateUser,
  verifyEmail,
  refreshToken,
} from "../controllers/user.controller.js";
import { checkDuplicateNikandEmail } from "../middleware/validation.js";
import { isAllRoles, verifyToken } from "../middleware/auth.js";
const router = Router();

router.get("/user", getUsers);
router.get("/interviewer", getInterviewer);
router.post("/interviewer", postInterviewer);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/signout", signout);
router.post("/signup", checkDuplicateNikandEmail, signup);
router.post("/testemail", signup);
router.post("/signin", signin);
router.post("/signin-user", signinUser);
router.get("/verify/:token", verifyEmail);
router.post("/send-forgot-password", sendLinkForgotPassword);
router.get("/forgot-password/:token", getLinkForgotPassword);
router.put("/forgot-password/:token", forgotPassword);
router.post("/refresh", refreshToken);
router.put(
  "/change-password-user/:id",
  [verifyToken, isAllRoles],
  changePasswordUser
);

export default router;
