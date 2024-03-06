import { Router } from "express";
import {
  isAllRoles,
  isInterviewer,
  isAdmin,
  verifyToken,
} from "../middleware/auth.js";
import {
  getApplications,
  getApplication,
  postApplication,
  updateApplication,
  deleteApplication,
  getApplicationByJob,
  getApplicationByApplicant,
  getApplicationByApplicantByNik,
  getApplicationByJobStatus,
  getApplicationByStatusLulus,
  getApplicationByStatusGagal,
  getApplicationInterviewer,
  exportGetApplicationByJob,
  getAnnouncement,
  exportGetApplicationByJobStatusLulus,
  exportGetApplicationByJobStatusGagal,
  ExportGetApplicationByStatusLulus,
  ExportGetApplicationByStatusGagal,
  importGetApplicationByStatusLulus,
  updateApplicationbyJob,
  getApplicationByApplicantByNikJob,
  getAnnouncementByAtten,
  getApplicationByJobAtten,
  deleteAttendance,
  checkApplication,
  // getApplicationByAttenYa,
  // getApplicationByAttenTidak,
  // exportGetApplicationByAttenYa,
  // exportGetApplicationByAttenTidak,
  postAtten,
} from "../controllers/application.controller.js";
const router = Router();

router.get("/application", [verifyToken, isAllRoles], getApplications);
router.get("/application/:id", [verifyToken, isAllRoles], getApplication);
router.get(
  "/application-job/:id",
  [verifyToken, isAllRoles],
  getApplicationByJob
);
router.get(
  "/application-job-export/:id",
  [verifyToken, isAllRoles],
  exportGetApplicationByJob
);
router.get(
  "/application-job-status/:id",
  [verifyToken, isAllRoles],
  getApplicationByJobStatus
);

router.get(
  "/application-job-atten/:id",
  [verifyToken, isAllRoles],
  getApplicationByJobAtten
);

router.get(
  "/application-job-status-lulus-export/:id",
  [verifyToken, isAllRoles],
  exportGetApplicationByJobStatusLulus
);
router.get(
  "/application-job-status-gagal-export/:id",
  [verifyToken, isAllRoles],
  exportGetApplicationByJobStatusGagal
);
router.get(
  "/application-status-lulus/:id",
  [verifyToken, isAllRoles],
  getApplicationByStatusLulus
);

// router.get(
//   "/application-atten-ya",
//   [verifyToken, isAllRoles],
//   getApplicationByAttenYa
// );

// router.get(
//   "/application-atten-ya",
//   [verifyToken, isAllRoles],
//   getApplicationByAttenTidak
// );

router.get(
  "/application-status-gagal/:id",
  [verifyToken, isAllRoles],
  getApplicationByStatusGagal
);
router.get(
  "/application-status-lulus-export",
  [verifyToken, isAllRoles],
  ExportGetApplicationByStatusLulus
);
//atten export
// router.get(
//   "/application-atten-ya-export",
//   [verifyToken, isAllRoles],
//   exportGetApplicationByAttenYa
// );
// router.get(
//   "/application-atten-tidak-export",
//   [verifyToken, isAllRoles],
//   exportGetApplicationByAttenTidak
// );
router.get(
  "/application-status-gagal-export",
  [verifyToken, isAllRoles],
  ExportGetApplicationByStatusGagal
);
router.get(
  "/application-applicant",
  [verifyToken, isAllRoles],
  getApplicationByApplicant
);
router.get(
  "/application-applicant/:nik",
  [verifyToken, isAllRoles],
  getApplicationByApplicantByNik
);

router.get(
  "/application-applicant/:nik/:job_id",
  [verifyToken, isAllRoles],
  getApplicationByApplicantByNikJob
);

router.get(
  "/application-interview/:id",
  [verifyToken, isInterviewer],
  getApplicationInterviewer
);
router.get(
  "/application-announcement/:nik/:no_test",
  [verifyToken, isAllRoles],
  getAnnouncement
);
//tesatten
router.get(
  "/application-announcement-atten/:nik/:no_test",
  [verifyToken, isAllRoles],
  getAnnouncementByAtten
);
router.post(
  "/application-job-import",
  [verifyToken, isAllRoles],
  importGetApplicationByStatusLulus
);
router.post("/application", [verifyToken, isAllRoles], postApplication);
router.put("/application/:id", [verifyToken, isAllRoles], updateApplication);
router.put("/application-all", [verifyToken, isAllRoles], updateApplication);
router.put(
  "/application-job/:id",
  [verifyToken, isAllRoles],
  updateApplicationbyJob
);

router.put(
  "/application-job-all",
  [verifyToken, isAllRoles],
  updateApplicationbyJob
);

router.delete(
  "/application/:id/:jobid/:nik",
  [verifyToken, isAllRoles],
  deleteApplication
);

router.post("/application-atten", [verifyToken, isAllRoles], postAtten);
router.post(
  "/application-atten/delete",
  [verifyToken, isAdmin],
  deleteAttendance
);
router.get(
  "/application-check/:job_id/:nik",
  [verifyToken, isAllRoles],
  checkApplication
);
export default router;
