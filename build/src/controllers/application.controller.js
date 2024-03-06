import Application from "../models/application.model.js";
import Randomstring from "randomstring";
import Document from "../models/document.model.js";
import { UploadUser, ImportData } from "../middleware/upload.js";
import db from "../config/db.js";
import { unlink } from "fs";
import { AsyncParser } from "@json2csv/node";
import {
  sendEmailApplication,
  sendEmailAnnoncement,
  sendInductionEmail,
} from "../utils/sendEmail.js";
import { createReadStream } from "fs";
import csvParser from "csv-parser";
import Attendance from "../models/attendance.model.js";

const upload = UploadUser.fields([
  {
    name: "application_letter",
    maxCount: 1,
  },
  {
    name: "cv",
    maxCount: 1,
  },
  {
    name: "ktp",
    maxCount: 1,
  },
  {
    name: "ijazah",
    maxCount: 1,
  },
  {
    name: "transkip",
    maxCount: 1,
  },
  {
    name: "photo",
    maxCount: 1,
  },
  {
    name: "skck",
    maxCount: 1,
  },
  {
    name: "health_certificate",
    maxCount: 1,
  },
  {
    name: "kk",
    maxCount: 1,
  },
  {
    name: "sim",
    maxCount: 1,
  },
  {
    name: "work_experience_letter",
    maxCount: 1,
  },
  {
    name: "npwp_letter",
    maxCount: 1,
  },
  {
    name: "bpjs_kesehatan",
    maxCount: 1,
  },
  {
    name: "bpjs_ketenagakerjaan",
    maxCount: 1,
  },
  {
    name: "achievements_certificate",
    maxCount: 1,
  },
  {
    name: "competency_certificate",
    maxCount: 1,
  },
  {
    name: "follow_rulles_letter",
    maxCount: 1,
  },
]);

const importData = ImportData.single("csvFile");

export const getApplications = async (req, res) => {
  try {
    const applications = await Application.findAll();
    console.log(applications);
    res.status(200).send(applications);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplication = async (req, res) => {
  try {
    const application = await Application.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!application)
      return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(application);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByJob = async (req, res) => {
  try {
    const [results, metadata] = await db.query(
      `SELECT 
      applications.id,
      jobs.position, 
      applications.no_test, 
      applications.jobs_id, 
      applications.applicants_nik, 
      applications.name, 
      applications.documents_nik, 
      applications.status, 
      applications.grade, 
      applications.next_selection, 
      applications.time_selection, 
      applications.time, 
      applications.place, 
      applications.timetable, 
      applications.createdAt, 
      applications.updatedAt, 
      applicants.email,
      applicants.*
      FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id INNER JOIN applicants ON applicants.nik = applications.applicants_nik WHERE applications.jobs_id = ${req.params.id} AND applications.status = "";   
      `
    );
    res.status(200).send(results);
    console.log(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByJobAtten = async (req, res) => {
  try {
    const [ya, metaya] = await db.query(
      `SELECT 
      MAX(attendance.id) AS id,
      attendance.no_test,
      attendance.name,
      MAX(attendance.domisili) AS domisili,
      MAX(attendance.next_selection) AS next_selection,
      MAX(attendance.kehadiran) AS kehadiran,
      MAX(attendance.position) AS position,
      MAX(attendance.gender) AS gender,
      MAX(attendance.email) AS email,
      MAX(attendance.createdAt) AS createdAt
    FROM attendance
    INNER JOIN applications ON applications.no_test = attendance.no_test
    WHERE attendance.kehadiran = 'Ya'
    GROUP BY 
      attendance.no_test, 
      attendance.name, 
      attendance.position,
      attendance.next_selection, 
      attendance.email;
    `
    );

    const [tidak, metatidak] = await db.query(
      `SELECT 
      MAX(attendance.id) AS id,
      attendance.no_test,
      attendance.name,
      MAX(attendance.domisili) AS domisili,
      MAX(attendance.next_selection) AS next_selection,
      MAX(attendance.kehadiran) AS kehadiran,
      MAX(attendance.position) AS position,
      MAX(attendance.gender) AS gender,
      MAX(attendance.email) AS email,
      MAX(attendance.createdAt) AS createdAt
    FROM attendance
    INNER JOIN applications ON applications.no_test = attendance.no_test
    WHERE attendance.kehadiran = 'Tidak'
    GROUP BY 
      attendance.no_test, 
      attendance.name, 
      attendance.position,
      attendance.next_selection, 
      attendance.email;
    `
    );

    const result = {
      ya: ya,
      tidak: tidak,
    };

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postAtten = async (req, res) => {
  console.log(req.body);
  const {
    no_test,
    position,
    name,
    email,
    next_selection,
    domisili,
    kehadiran,
    gender,
  } = req.body;
  try {
    await Attendance.create({
      no_test: no_test,
      position: position,
      name: name,
      email: email,
      next_selection: next_selection,
      domisili: domisili,
      kehadiran: kehadiran,
      gender: gender,
    });

    res.status(201).send({ message: "Successfully send attendance" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "You have filled out this form" });
  }
};

export const deleteAttendance = async (req, res) => {
  try {
    const data = req.body;

    for (const item of data) {
      await Attendance.destroy({
        where: { id: item },
      });
    }

    res.status(200).send({ message: "Delete Attendance Successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: error.message });
  }
};

export const exportGetApplicationByJob = async (req, res) => {
  try {
    const [results, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.jobs_id, applications.applicants_nik, applications.name, applications.documents_nik, applications.status, applications.grade, applications.next_selection, applications.time_selection, applications.timetable, applications.createdAt, applications.updatedAt, applicants.email, applicants.* FROM applications INNER JOIN applicants ON applicants.nik = applications.applicants_nik WHERE applications.jobs_id = ${req.params.id} AND applications.status = ""`
    );
    if (results.length === 0) {
      return res.status(200).send({ message: "Data not found" });
    }

    const parser = new AsyncParser();
    const csv = await parser.parse(results).promise();
    res.status(200).send(csv);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByJobStatus = async (req, res) => {
  try {
    const [lulus, metalulus] = await db.query(
      `SELECT applications.id, applications.no_test, applications.name, jobs.position, jobs.section, applications.next_selection, applications.interviewer_id,applications.tahap_seleksi, applications.grade, applications.time_selection, applications.time, applications.place, applications.grade, applications.status, applications.medical_check, applications.timetable, applicants.email FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id INNER JOIN applicants ON applicants.nik = applications.applicants_nik  WHERE applications.jobs_id = ${req.params.id} AND applications.status = "Lulus" AND applications.tahap_seleksi != "Induction"`
    );

    const [gagal, metagagal] = await db.query(
      `SELECT applications.id, applications.no_test, applications.tahap_seleksi, applications.name, jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.time, applications.place, applications.grade, applications.status, applications.medical_check, applicants.email FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id INNER JOIN applicants ON applicants.nik = applications.applicants_nik WHERE applications.jobs_id = ${req.params.id} AND applications.status = "Tidak Lulus"`
    );

    res.status(200).send({
      lulus: lulus,
      gagal: gagal,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const exportGetApplicationByJobStatusLulus = async (req, res) => {
  try {
    const [results, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.name, jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.grade, applications.status, applicants.email FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id INNER JOIN applicants ON applicants.nik = applications.applicants_nik WHERE applications.jobs_id = ${req.params.id} AND applications.status = "Lulus"`
    );
    if (results.length === 0) {
      return res.status(200).send({ message: "Data not found" });
    }

    res.setHeader("Content-Type", "text/csv");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="lamaran-lulus.csv"'
    );
    const parser = new AsyncParser();
    const csv = await parser.parse(results).promise();
    res.status(200).send(csv);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const exportGetApplicationByJobStatusGagal = async (req, res) => {
  try {
    const [results, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.name, jobs.position, jobs.section, applications.tahap_seleksi, applications.grade, applications.status, applicants.email FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id INNER JOIN applicants ON applicants.nik = applications.applicants_nik WHERE applications.jobs_id = ${req.params.id} AND applications.status = "Tidak Lulus"`
    );
    if (results.length === 0) {
      return res.status(200).send({ message: "Data not found" });
    }

    res.setHeader("Content-Type", "text/csv");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="lamaran-gagal.csv"'
    );
    const parser = new AsyncParser();
    const csv = await parser.parse(results).promise();
    res.status(200).send(csv);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByStatusLulus = async (req, res) => {
  try {
    const search = req.query.search || "";
    const [results, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.jobs_id, applications.documents_nik, applications.name, jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.grade, applications.status FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id  AND applications.status ="Lulus" and applications.name like '%${search}%'`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const importGetApplicationByStatusLulus = (req, res) => {
  try {
    importData(req, res, (err) => {
      if (err) return res.status(400).send({ message: err.message });
      const file = req.file;
      if (file === undefined)
        return res
          .status(404)
          .send({ message: "Harap input file terlebih dahulu" });
      const readStream = createReadStream(
        `/projects/backend-recruitment-sumitomo/uploads/${file.filename}`
      )
        .pipe(csvParser())
        .on("data", (row) => {
          Application.update(
            {
              status: row.status,
              grade: row.grade,
              next_selection: row.next_selection,
              time_selection: row.time_selection,
              timetable: row.timetable,
            },
            { where: { id: row.id } }
          );
        })
        .on("end", () => {
          res.status(200).send("Data update successfully");
        });

      readStream.on("error", (err) => {
        res.end(err);
      });

      unlink(`uploads/${file.filename}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByStatusGagal = async (req, res) => {
  try {
    const search = req.query.search || "";
    const [results, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.jobs_id, applications.tahap_seleksi, applications.documents_nik, applications.name, jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.grade, applications.status FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.status = "Tidak Lulus" and applications.name like '%${search}%'`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const ExportGetApplicationByStatusLulus = async (req, res) => {
  try {
    const [results, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.name, jobs.position, jobs.section,  applications.grade, applications.status FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.tahap_seleksi ="Induction" AND applications.status ="Lulus"`
    );
    if (results.length === 0) {
      return res.status(200).send({ message: "Data not found" });
    }

    res.setHeader("Content-Type", "text/csv");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="lamaran-lulus.csv"'
    );
    const parser = new AsyncParser();
    const csv = await parser.parse(results).promise();
    res.status(200).send(csv);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const ExportGetApplicationByStatusGagal = async (req, res) => {
  try {
    const [results, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.name, jobs.position, jobs.section, applications.tahap_seleksi, applications.grade, applications.status FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.status = "Tidak Lulus"`
    );
    if (results.length === 0) {
      return res.status(200).send({ message: "Data not found" });
    }

    res.setHeader("Content-Type", "text/csv");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="lamaran-lulus.csv"'
    );
    const parser = new AsyncParser();
    const csv = await parser.parse(results).promise();
    res.status(200).send(csv);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByApplicant = async (req, res) => {
  try {
    const [results, metadata] = await db.query(
      `SELECT applications.no_test, applications.applicants_nik, applications.name, jobs.position, jobs.section FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByApplicantByNik = async (req, res) => {
  try {
    const { nik } = req.params;
    const [results, metadata] = await db.query(
      `SELECT applications.no_test, applications.applicants_nik, applications.name, jobs.position, jobs.section FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.applicants_nik=${nik}`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationByApplicantByNikJob = async (req, res) => {
  try {
    const { nik, job_id } = req.params;
    const [results, metadata] = await db.query(
      `SELECT applications.id,applications.no_test, applications.applicants_nik, applications.name, jobs.position, jobs.section FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.applicants_nik=${nik} and applications.jobs_id=${job_id}`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicationInterviewer = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const [result, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.applicants_nik, applications.jobs_id, applications.name, jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.grade, applications.status, applicants.email FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id INNER JOIN applicants ON applicants.nik = applications.applicants_nik WHERE applications.next_selection = "Wawancara" AND applications.interviewer_id = ${id};`
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getAnnouncement = async (req, res) => {
  try {
    const { nik, no_test } = req.params;
    const [result, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.applicants_nik, applications.name,  jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.grade, applications.status, applications.tahap_seleksi, applications.timetable FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.applicants_nik=${nik} AND applications.no_test=${no_test}`
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//tesatten
export const getAnnouncementByAtten = async (req, res) => {
  try {
    const { nik, no_test } = req.params;
    const [result, metadata] = await db.query(
      `SELECT applications.id, applications.no_test, applications.applicants_nik, applications.name,  jobs.position, jobs.section, applications.next_selection, applications.time_selection, applications.grade, applications.status, applications.tahap_seleksi, applications.timetable FROM applications INNER JOIN jobs ON jobs.id = applications.jobs_id WHERE applications.applicants_nik=${nik} AND applications.no_test=${no_test}`
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const checkApplication = async (req, res) => {
  try {
    const { job_id, nik } = req.params;
    const check = await Application.findAll({
      where: {
        jobs_id: job_id,
        applicants_nik: nik,
      },
    });

    if (check?.length != 0) {
      return res
        .status(200)
        .send({ message: "You have applied for this job", status: false });
    } else {
      return res
        .status(200)
        .send({ message: "Continue to apply", status: true });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postApplication = (req, res) => {
  try {
    upload(req, res, async (err) => {
      const { jobs_id, position, applicants_nik, name, documents_nik, email } =
        req.body;
      if (err) return res.status(400).send({ message: err.message });
      const files = req.files;
      console.log(files);
      const check = await Application.findAll({
        where: {
          jobs_id: jobs_id,
          applicants_nik: applicants_nik,
        },
      });
      if (check != 0)
        return res
          .status(404)
          .send({ message: "You have applied for this job" });
      const data = {
        nik: documents_nik,
        jobs_id: jobs_id,
        position: position,
        application_letter: files.application_letter
          ? files.application_letter[0].filename
          : "",
        cv: files.cv ? files.cv[0].filename : "",
        ktp: files.ktp ? files.ktp[0].filename : "",
        ijazah: files.ijazah ? files.ijazah[0].filename : "",
        transkip: files.transkip ? files.transkip[0].filename : "",
        photo: files.photo ? files.photo[0].filename : "",
        skck: files.skck ? files.skck[0].filename : "",
        health_certificate: files.health_certificate
          ? files.health_certificate[0].filename
          : "",
        kk: files.kk ? files.kk[0].filename : "",
        sim: files.sim ? files.sim[0].filename : "",
        work_experience_letter: files.work_experience_letter
          ? files.work_experience_letter[0].filename
          : "",
        npwp_letter: files.npwp_letter ? files.npwp_letter[0].filename : "",
        bpjs_kesehatan: files.bpjs_kesehatan
          ? files.bpjs_kesehatan[0].filename
          : "",
        bpjs_ketenagakerjaan: files.bpjs_ketenagakerjaan
          ? files.bpjs_ketenagakerjaan[0].filename
          : "",
        achievements_certificate: files.achievements_certificate
          ? files.achievements_certificate[0].filename
          : "",
        competency_certificate: files.competency_certificate
          ? files.competency_certificate[0].filename
          : "",
        follow_rulles_letter: files.follow_rulles_letter
          ? files.follow_rulles_letter[0].filename
          : "",
      };
      Application.create({
        no_test: Randomstring.generate(6).toUpperCase(),
        jobs_id: jobs_id,
        position: position,
        applicants_nik: applicants_nik,
        name: name,
        documents_nik: documents_nik,
        email: email,
      });
      const doc = Document.create(data);
      if (!doc) return req.status(400).send({ message: "Failed Upload" });
      return res.status(200).send({
        message: "Successfully send application",
      });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateApplication = async (req, res) => {
  try {
    const data = req.body;

    for (const item of data) {
      const { id, ...updates } = item;

      await Application.update(updates, {
        where: { no_test: id },
      });

      const result = await Application.findOne({ where: { no_test: id } });
      console.log(result);

      if (updates.status === "Lulus") {
        const {
          email,
          name,
          no_test,
          position,
          time_selection,
          time,
          place,
          next_selection,
        } = result;

        if (next_selection === "Induction") {
          // Send different email for Induction system
          sendInductionEmail(
            email,
            "Induction System Invitation",
            name,
            no_test,
            position,
            time_selection,
            next_selection,
            time,
            place
          );
        } else {
          // Send default email for other cases
          sendEmailAnnoncement(
            email,
            "Informasi Undangan Test",
            name,
            no_test,
            position,
            time_selection,
            next_selection,
            time,
            place
          );
        }
      } else {
        console.error("Email recipient is missing or invalid.");
      }
    }

    res.status(200).send({ message: "Update Application Successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: error.message });
  }
};

export const updateApplicationbyJob = async (req, res) => {
  try {
    const data = req.body;

    for (const item of data) {
      const { id, ...updates } = item;

      await Application.update(updates, {
        where: { no_test: id },
      });

      const result = await Application.findOne({ where: { no_test: id } });
      console.log(result);

      if (updates.status === "Lulus") {
        const { email, name, no_test, position, time_selection, time, place } =
          result;

        sendEmailApplication(
          email,
          "Informasi Undangan Test",
          name,
          no_test,
          position,
          time_selection,
          time,
          place
        );
      } else {
        console.error("Email recipient is missing or invalid.");
      }
    }

    res.status(200).send({ message: "Update Application Successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: error.message });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const application = await Application.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!application)
      return res.status(404).send({ message: "Data not found!" });
    const document = await Document.findOne({
      where: {
        jobs_id: req.params.jobid,
        nik: req.params.nik,
      },
    });
    await Document.destroy({
      where: {
        jobs_id: req.params.jobid,
        nik: req.params.nik,
      },
    });

    if (document.application_letter.length > 0) {
      unlink(`uploads/${document.application_letter}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.cv.length > 0) {
      unlink(`uploads/${document.cv}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.ktp.length > 0) {
      unlink(`uploads/${document.ktp}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.ijazah.length > 0) {
      unlink(`uploads/${document.ijazah}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.transkip.length > 0) {
      unlink(`uploads/${document.transkip}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.photo.length > 0) {
      unlink(`uploads/${document.photo}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.skck.length > 0) {
      unlink(`uploads/${document.skck}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.health_certificate.length > 0) {
      unlink(`uploads/${document.health_certificate}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.kk.length > 0) {
      unlink(`uploads/${document.kk}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.sim.length > 0) {
      unlink(`uploads/${document.sim}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.work_experience_letter.length > 0) {
      unlink(`uploads/${document.work_experience_letter}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.npwp_letter.length > 0) {
      unlink(`uploads/${document.npwp_letter}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.bpjs_kesehatan.length > 0) {
      unlink(`uploads/${document.bpjs_kesehatan}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.bpjs_ketenagakerjaan.length > 0) {
      unlink(`uploads/${document.bpjs_ketenagakerjaan}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.achievements_certificate.length > 0) {
      unlink(`uploads/${document.achievements_certificate}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
    if (document.competency_certificate.length > 0) {
      unlink(`uploads/${document.competency_certificate}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }

    if (document.follow_rulles_letter.length > 0) {
      unlink(`uploads/${document.follow_rulles_letter}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File deleted successfully");
      });
    }

    res.status(200).send({
      message: "Successfully delete data",
      id: req.params.id,
      data: document,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
