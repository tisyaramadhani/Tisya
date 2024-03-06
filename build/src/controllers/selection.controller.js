import Selection from "../models/selection.model.js";

export const getSelections = async (req, res) => {
  try {
    const selections = await Selection.findAll();
    res.status(200).send(selections);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getSelection = async (req, res) => {
  try {
    const selection = await Selection.findOne({
      where: {
        id: req.params.id,
      }
    });
    if (!selection) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(selection);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postSelection = async (req, res) => {
  const { name } = req.body;
  try {
    await Selection.create({
      name: name,
    });
    res.status(201).send({ message: "Selection Created" });
  } catch (error) {
      res.status(500).send({ message: error.message });
  }
};

export const updateSelection = async (req, res) => {
  const { name } = req.body;
  try {
    const selection = await Selection.update(
      {
        name: name
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (selection == 0) return res.status(404).send({ message: "Data not found" });
    res.status(200).send({ message: "Successfully update data" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteSelection = async (req, res) => {
  try {
    const selection = await Selection.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!selection) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({ 
      message: "Successfully delete data", 
      id: req.params.id 
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}