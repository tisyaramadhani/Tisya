import Major from "../models/major.model.js";

export const getMajors = async (req, res) => {
  try {
    const majors = await Major.findAll();
    res.status(200).send(majors);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getMajor = async (req, res) => {
  try {
    const major = await Major.findOne({
      where: {
        id: req.params.id,
      }
    });
    if (!major) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(major);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postMajor = async (req, res) => {
  const { name } = req.body;
  try {
    await Major.create({
      name: name,
    });
    res.status(201).send({ message: "major Created" });
  } catch (error) {
      res.status(500).send({ message: error.message });
  }
};

export const updateMajor = async (req, res) => {
  const { name } = req.body;
  try {
    const major = await Major.update(
      {
        name: name
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (major == 0) return res.status(404).send({ message: "Data not found" });
    res.status(200).send({ message: "Successfully update data" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteMajor = async (req, res) => {
  try {
    const major = await Major.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!major) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({ 
      message: "Successfully delete data", 
      id: req.params.id 
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}