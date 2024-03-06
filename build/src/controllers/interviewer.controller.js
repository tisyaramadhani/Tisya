import { config } from "dotenv";
import Interviewer from "../models/interviewer.model.js";
config();

export const getInterviewers = async (req, res) => {
  try {
    const interviewers = await Interviewer.findAll({
      attributes: {
        exclude: "password",
      },
    });
    res.status(200).send(interviewers);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getInterviewer = async (req, res) => {
  try {
    const interviewer = await Interviewer.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!interviewer) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(interviewer);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateInterviewer = async (req, res) => {
  const { nik, name, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const interviewer = await Interviewer.update(
      {
        nik: nik,
        name: name,
        password: hashPassword,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (interviewer == 0) return res.status(404).send({ message: "Data not found" });
    res.status(200).send({ message: "Successfully update data" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteInterviewer = async (req, res) => {
  try {
    const interviewer = await Interviewer.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!interviewer) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({ 
      message: "Successfully delete data", 
      id: req.params.id 
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postInterviewer = async (req, res) => {
  const {
    nik,
    name,
    password,
    confPassword
  } = req.body;
  if (password != confPassword)
    return res
      .status(404)
      .send({ message: "Password and Confirm password must be same!" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Interviewer.create({
      nik: nik,
      name: name,
      password: hashPassword,
    });
    res.status(201).send({
      message: "Create account successfully",
    });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return res.status(400).send({
        // message: error.errors.map(e => e.message)
        message: error.errors[0].message,
      });
    } else {
      res.status(500).send({ message: error.message });
    }
  }
};

export const signin = async (req, res) => {
  const { nik, password } = req.body;
  try {
    const interviewer = await Interviewer.findOne({
      where: {
        nik: nik,
      },
    });
    if (!interviewer) return res.status(404).send({ message: "User not found!" });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).send({ message: "Invalid Password" });
    const token = jwt.sign(
      {
        id: interviewer.id,
        nik: interviewer.nik,
      },
      process.env.ACCESS_TOKEN_SECRET
    );

    // res.status(200).cookie("accessToken", token, {
    //   httpOnly: true,
    //   secure: true,
    // }).send(token)
    res.status(200).cookie("accessToken", token).send(token);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const signout = (req, res) => {
  try {
    res
      .clearCookie("accessToken")
      .status(200)
      .send({ message: "Successfully Logged out" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};