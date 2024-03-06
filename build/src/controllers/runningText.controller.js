import RunningText from "../models/runningText.model.js";

export const getRunningTexts = async (req, res) => {
  try {
    const runningTexts = await RunningText.findAll();
    res.status(200).send(runningTexts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getRunningText = async (req, res) => {
  try {
    const runningText = await RunningText.findOne({
      where: {
        id: req.params.id,
      }
    });
    if (!runningText) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(runningText);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postRunningText = async (req, res) => {
  const { text } = req.body;
  try {
    await RunningText.create({
      text: text,
    });
    res.status(201).send({ message: "running Text Created" });
  } catch (error) {
      res.status(500).send({ message: error.message });
  }
};

export const updateRunningText = async (req, res) => {
  const { text } = req.body;
  try {
    const runningText = await RunningText.update(
      {
        text: text
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (runningText == 0) return res.status(404).send({ message: "Data not found" });
    res.status(200).send({ message: "Successfully update data" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteRunningText = async (req, res) => {
  try {
    const runningText = await RunningText.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!runningText) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({ 
      message: "Successfully delete data", 
      id: req.params.id 
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}