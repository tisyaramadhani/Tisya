import { Upload } from "../middleware/upload.js";
import PresidentText from "../models/presidentText.model.js";

export const getPresidentTexts = async (req, res) => {
  try {
    const presidentTexts = await PresidentText.findAll();
    res.status(200).send(presidentTexts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getPresidentText = async (req, res) => {
  try {
    const presidentText = await PresidentText.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!presidentText)
      return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(presidentText);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const upload = Upload.single("photo");

export const postPresidentText = async (req, res) => {
  try {
    upload(req, res, (err) => {
      const { text } = req.body;
      if (err) return res.status(400).send({ message: err.message });
      else if (!req.file)
        return res.status(404).send({ message: "No file upload" });
      console.log(req.file);
      PresidentText.create({
        text: text,
        photo: req.file.filename,
      });
      return res.status(201).send({
        message: "President Text created",
      });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updatePresidentText = async (req, res) => {
  try {
    upload(req, res, (err) => {
      const { text } = req.body;
      if (err) return res.status(400).send({ message: err.message });
      else if (!req.file) {
        PresidentText.update(
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
          message: "Succesfully Update President Text",
        });
      } else {
        PresidentText.update(
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
          message: "Succesfully Update President Text",
        });
      }
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deletePresidentText = async (req, res) => {
  try {
    const presidentText = await PresidentText.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!presidentText)
      return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({
      message: "Successfully delete data",
      id: req.params.id,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
