import { Upload } from "../middleware/upload.js";
import ProfileCompany from "../models/profile_company.js";

export const getProfileCompanys = async (req, res) => {
  try {
    const profileCompanys = await ProfileCompany.findAll();
    res.status(200).send(profileCompanys);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getProfileCompany = async (req, res) => {
  try {
    const profileCompany = await ProfileCompany.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!profileCompany)
      return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(profileCompany);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const upload = Upload.single("photo");

export const postProfileCompany = async (req, res) => {
  try {
    upload(req, res, (err) => {
      const { text } = req.body;
      if (err) return res.status(400).send({ message: err.message });
      else if (!req.file)
        return res.status(404).send({ message: "No file upload" });
      console.log(req.file);
      ProfileCompany.create({
        text: text,
        photo: req.file.filename,
      });
      return res.status(201).send({
        message: "Profil Company created",
      });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateProfileCompany = async (req, res) => {
  try {
    upload(req, res, (err) => {
      const { text } = req.body;
      if (err) return res.status(400).send({ message: err.message });
      else if (!req.file) {
        ProfileCompany.update(
          {
            text: text,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        );
        return res.status(200).send({
          message: "Succesfully Update Profil Company",
        });
      } else {
        ProfileCompany.update(
          {
            text: text,
            photo: req.file.filename,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        );
        return res.status(200).send({
          message: "Succesfully Update Profil Company",
        });
      }
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteProfileCompany = async (req, res) => {
  try {
    const profileCompany = await ProfileCompany.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!profileCompany)
      return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({
      message: "Successfully delete data",
      id: req.params.id,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
