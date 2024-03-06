import { dirname } from "path";
import { fileURLToPath } from "url";
import { UploadUser } from "../middleware/upload.js";
import Document from "../models/document.model.js";

// const __dirname = dirname(fileURLToPath(import.meta.url));y

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
    name: "domicile_letter",
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
    name: "vaccine_certificate",
    maxCount: 1,
  },
  {
    name: "rapid_test_letter",
    maxCount: 1,
  },
  {
    name: "follow_rulles_letter",
    maxCount: 1,
  },
]);

export const getDocuments = async (req, res) => {
  try {
    const documents = await Document.findAll();
    res.status(200).send(documents);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getDocument = async (req, res) => {
  try {
    const documents = await Document.findAll({
      where: {
        nik: req.params.nik,
      },
    });
    if (!documents) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(documents);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getDocumentByJob = async (req, res) => {
  try {
    const documents = await Document.findOne({
      where: {
        nik: req.params.nik,
        jobs_id: req.params.jobid,
      },
    });
    if (!documents) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(documents);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postDocument = (req, res) => {
  try {
    upload(req, res, (err) => {
      const { nik } = req.body;
      if (err) return res.status(400).send({ message: err.message });
      else if (!req.files)
        return res.status(404).send({ message: "No file upload" });
      const files = req.files;
      console.log(files);
      const doc = Document.create({
        nik: nik,
        application_letter: files["application_letter"][0].filename,
        cv: files["cv"][0].filename,
        ktp: files["ktp"][0].filename,
        ijazah: files["ijazah"][0].filename,
        photo: files["photo"][0].filename,
        skck: files["skck"][0].filename,
        health_certificate: files["health_certificate"][0].filename,
        kk: files["kk"][0].filename,
        domicile_letter: files["domicile_letter"][0].filename,
        work_experience_letter: files["work_experience_letter"][0].filename,
        npwp_letter: files["npwp_letter"][0].filename,
        bpjs_kesehatan: files["bpjs_kesehatan"][0].filename,
        bpjs_ketenagakerjaan: files["bpjs_ketenagakerjaan"][0].filename,
        achievements_certificate: files["achievements_certificate"][0].filename,
        competency_certificate: files["competency_certificate"][0].filename,
        vaccine_certificate: files["vaccine_certificate"][0].filename,
        rapid_test_letter: files["rapid_test_letter"][0].filename,
        follow_rulles_letter: files["follow_rulles_letter"][0].filename,
      });
      if (!doc) return res.status(400).send({ message: "Failed Upload" });
      return res.status(200).send({
        message: "Document created",
      });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateDocument = (req, res) => {
  try {
    upload(req, res, (err) => {
      const { nik } = req.params;
      if (err) return res.status(400).send({ message: err.message });
      if (!req.files)
        return res.status(404).send({ message: "No file upload" });
      const files = req.files;
      console.log(files);
      const data = {
        nik: nik,
        application_letter: files.application_letter
          ? files.application_letter[0].filename
          : "",
        cv: files.cv ? files.cv[0].filename : "",
        ktp: files.ktp ? files.ktp[0].filename : "",
        ijazah: files.ijazah ? files.ijazah[0].filename : "",
        photo: files.photo ? files.photo[0].filename : "",
        skck: files.skck ? files.skck[0].filename : "",
        health_certificate: files.health_certificate
          ? files.health_certificate[0].filename
          : "",
        kk: files.kk ? files.kk[0].filename : "",
        domicile_letter: files.domicile
          ? files.domicile_letter[0].filename
          : "",
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
        vaccine_certificate: files.vaccine_certificate
          ? files.vaccine_certificate[0].filename
          : "",
        rapid_test_letter: files.rapid_test_letter
          ? files.rapid_test_letter[0].filename
          : "",
        follow_rulles_letter: files.follow_rulles_letter
          ? files.follow_rulles_letter[0].filename
          : "",
      };
      const doc = Document.update(data, {
        where: {
          nik: nik,
        },
      });
      if (!doc) return req.status(400).send({ message: "Failed Upload" });
      return res.status(200).send({
        message: "Successfully update data",
      });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const download = async (req, res) => {
  return 0;
};
