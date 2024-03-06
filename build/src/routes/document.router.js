import { Router } from "express";
import {
  download,
  getDocuments,
  getDocument,
  postDocument,
  updateDocument,
  getDocumentByJob,
} from "../controllers/document.controller.js";
import { isAllRoles, verifyToken } from "../middleware/auth.js";
const router = Router();
import path from "path";

router.get("/document", [verifyToken, isAllRoles], getDocuments);
router.get("/document/:nik", [verifyToken, isAllRoles], getDocument);
router.get(
  "/document-job/:nik/:jobid",
  [verifyToken, isAllRoles],
  getDocumentByJob
);
router.post("/document", [verifyToken, isAllRoles], postDocument);
router.put("/document/:nik", [verifyToken, isAllRoles], updateDocument);
router.get("/download", [verifyToken, isAllRoles], download);

router.get("/download-existing-file", (req, res) => {
  const __dirname = path.dirname("template-cv.pdf");
  try {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=template-cv.pdf"
    );
    res.download(
      path.join(__dirname, "public", "template-cv.pdf"),
      "template-cv.pdf",
      (err) => {
        if (err) {
          console.error("Error:", err);
          res.status(500).send("Internal Server Error");
        }
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/download-existing-file-komitmen", (req, res) => {
  const __dirname = path.dirname("komitmen.pdf");
  try {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=komitmen.pdf");
    res.download(
      path.join(__dirname, "public", "komitmen.pdf"),
      "komitmen.pdf",
      (err) => {
        if (err) {
          console.error("Error:", err);
          res.status(500).send("Internal Server Error");
        }
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
