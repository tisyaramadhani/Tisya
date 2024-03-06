import Certification from "../models/certification.model.js";

export const getCertifications = async (req, res) => {
  try {
    const certifications = await Certification.findAll();
    res.status(200).send(certifications);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getCertification = async (req, res) => {
  try {
    const certification = await Certification.findOne({
      where: {
        id: req.params.id,
      }
    });
    if (!certification) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(certification);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postCertification = async (req, res) => {
  const { name } = req.body;
  try {
    await Certification.create({
      name: name,
    });
    res.status(201).send({ message: "Certification Created" });
  } catch (error) {
      res.status(500).send({ message: error.message });
  }
};

export const updateCertification = async (req, res) => {
  const { name } = req.body;
  try {
    const certification = await Certification.update(
      {
        name: name
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (certification == 0) return res.status(404).send({ message: "Data not found" });
    res.status(200).send({ message: "Successfully update data" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteCertification = async (req, res) => {
  try {
    const certification = await Certification.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!certification) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({ 
      message: "Successfully delete data", 
      id: req.params.id 
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}