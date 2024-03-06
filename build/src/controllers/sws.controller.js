import { Upload } from "../middleware/upload.js";
import SWS from "../models/sws.model.js"

export const getSWSs = async (req, res) => {
  try {
    const swss = await SWS.findAll();
    res.status(200).send(swss);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getSWS = async (req, res) => {
  try {
    const sws = await SWS.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!sws)
      return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(sws);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const upload = Upload.single("photo");

export const postSWS = async (req, res) => {
  try {
    upload(req, res, (err) => {
      if (err) return res.status(400).send({ message: err.message });
      else if (!req.file)
        return res.status(404).send({ message: "No file upload" });
      console.log(req.file);
      SWS.create({
        photo: req.file.filename,
      });
      return res.status(201).send({
        message: "SWS created",
      });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateSWS = async (req, res) => {
  try {
    upload(req, res, (err) => {
      if (err) return res.status(400).send({ message: err.message });
      else if (!req.file)
        return res.status(404).send({ message: "No file upload" });
      SWS.update(
        {
          photo: req.file.filename,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return res.status(200).send({
        message: "Succesfully Update SWS",
      });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteSWS = async (req, res) => {
  try {
    const sws = await SWS.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!sws)
      return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({
      message: "Successfully delete data",
      id: req.params.id,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
