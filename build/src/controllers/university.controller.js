import University from "../models/university.model.js";

export const getUniversities = async (req, res) => {
  try {
    const universities = await University.findAll();
    res.status(200).send(universities);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getUniversity = async (req, res) => {
  try {
    const university = await University.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!university)
      return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(university);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postUniversity = async (req, res) => {
  const { name } = req.body;
  try {
    await University.create({
      name: name,
    });
    res.status(201).send({ message: "university Created" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateUniversity = async (req, res) => {
  const { name } = req.body;
  try {
    const university = await University.update(
      {
        name: name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (university == 0)
      return res.status(404).send({ message: "Data not found" });
    res.status(200).send({ message: "Successfully update data" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteUniversity = async (req, res) => {
  try {
    const university = await University.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!university)
      return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({
      message: "Successfully delete data",
      id: req.params.id,
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
