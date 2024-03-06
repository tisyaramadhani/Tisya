import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config();

import applicationRouter from "./src/routes/application.router.js";
import applicantRouter from "./src/routes/applicant.router.js";
import documentRouter from "./src/routes/document.router.js";
import interviewerRouter from "./src/routes/interviewer.router.js";
import jobRouter from "./src/routes/job.router.js";
import sectionRouter from "./src/routes/section.router.js";
import selectionRouter from "./src/routes/selection.router.js";
import userRouter from "./src/routes/user.router.js";
import runningTextRouter from "./src/routes/runningText.router.js";
import profileCompanyRouter from "./src/routes/profile_company.router.js";
import presidentTextRouter from "./src/routes/presidentText.router.js";
import certificationRouter from "./src/routes/certification.router.js";
import majorRouter from "./src/routes/major.router.js";
import skillRouter from "./src/routes/skill.router.js";
import universityRouter from "./src/routes/university.router.js";

import { verifyToken } from "./src/middleware/auth.js";

import db from "./src/config/db.js";
db.authenticate()
  .then(() => {
    console.log("Connection Successfully");
  })
  .catch((error) => {
    console.log("Unable Connect:", error);
  });

const app = express();
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const api = "/api/v1";

const whitelist = [
  `http://${HOST}:3000`,
  "http://192.168.17.214:3000",
  `http://${HOST}:3001`,
  "http://192.168.17.214:3001",
];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(api, userRouter);
app.use(api, jobRouter);
app.use(api, documentRouter);
app.use(api, applicantRouter);
app.use(api, applicationRouter);
app.use(api, sectionRouter);
app.use(api, selectionRouter);
app.use(api, interviewerRouter);
app.use(api, runningTextRouter);
app.use(api, profileCompanyRouter);
app.use(api, presidentTextRouter);
app.use(api, certificationRouter);
app.use(api, majorRouter);
app.use(api, skillRouter);
app.use(api, universityRouter);
app.use("/public", express.static("public"));
app.use("/api/v1/uploads", verifyToken, express.static("uploads"));

app.get("/", (req, res) => {
  res.json({ message: "Api website recruitment sumitomo" });
});

app.listen(PORT, HOST, () => {
  console.log(`App running on http://${HOST}:${PORT}`);
});
