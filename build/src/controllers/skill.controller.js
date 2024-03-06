import Skill from "../models/skill.model.js"

export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll();
    res.status(200).send(skills);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getSkill = async (req, res) => {
  try {
    const skill = await Skill.findOne({
      where: {
        id: req.params.id,
      }
    });
    if (!skill) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(skill);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postSkill = async (req, res) => {
  const { name } = req.body;
  try {
    await Skill.create({
      name: name,
    });
    res.status(201).send({ message: "skill Created" });
  } catch (error) {
      res.status(500).send({ message: error.message });
  }
};

export const updateSkill = async (req, res) => {
  const { name } = req.body;
  try {
    const skill = await Skill.update(
      {
        name: name
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (skill == 0) return res.status(404).send({ message: "Data not found" });
    res.status(200).send({ message: "Successfully update data" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!skill) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({ 
      message: "Successfully delete data", 
      id: req.params.id 
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}