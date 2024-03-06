import Job from "../models/job.model.js";
import db from "../config/db.js";

export const getJobs = async (req, res) => {
  try {
    const search = req.query.search || "";
    const [results, metadata] = await db.query(
      `SELECT id, position, section, qualification, estimated_joining, timeline, application_open, application_close, about_company, status, create_by, createdAt, updatedAt FROM jobs WHERE status=1 and position like '%${search}%' or status=0 and position like '%${search}%'`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getJob = async (req, res) => {
  try {
    const job = await Job.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!job) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(job);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postJob = async (req, res) => {
  const {
    position,
    section,
    qualification,
    estimated_joining,
    timeline,
    application_open,
    application_close,
    about_company,
    status,
    create_by,
  } = req.body;
  try {
    await Job.create({
      position: position,
      section: section,
      qualification: qualification,
      estimated_joining: estimated_joining,
      timeline: timeline,
      application_open: application_open,
      application_close: application_close,
      about_company: about_company,
      status: status,
      create_by: create_by,
    });
    res.status(201).send({ message: "Job Created" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateJob = async (req, res) => {
  const {
    position,
    section,
    qualification,
    estimated_joining,
    timeline,
    application_open,
    application_close,
    about_company,
    status,
  } = req.body;
  try {
    const job = await Job.update(
      {
        position: position,
        section: section,
        qualification: qualification,
        estimated_joining: estimated_joining,
        timeline: timeline,
        application_open: application_open,
        application_close: application_close,
        about_company: about_company,
        status: status,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (job == 0) return res.status(404).send({ message: "Data not found" });
    res.status(200).send({ message: "Successfully update data" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const job = await Job.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!job) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({
      message: "Successfully delete data",
      id: req.params.id,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
