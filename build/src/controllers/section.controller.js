import Section from "../models/section.model.js";

export const getSections = async (req, res) => {
  try {
    const sections = await Section.findAll();
    res.status(200).send(sections);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getSection = async (req, res) => {
  try {
    const section = await Section.findOne({
      where: {
        id: req.params.id,
      }
    });
    if (!section) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(section);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postSection = async (req, res) => {
  const { name } = req.body;
  try {
    await Section.create({
      name: name,
    });
    res.status(201).send({ message: "Section Created" });
  } catch (error) {
      res.status(500).send({ message: error.message });
  }
};

export const updateSection = async (req, res) => {
  const { name } = req.body;
  try {
    const section = await Section.update(
      {
        name: name
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (section == 0) return res.status(404).send({ message: "Data not found" });
    res.status(200).send({ message: "Successfully update data" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteSection = async (req, res) => {
  try {
    const section = await Section.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!section) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({ 
      message: "Successfully delete data", 
      id: req.params.id 
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}