import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Application = db.define(
  "applications",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },
    no_test: {
      type: DataTypes.STRING,
      unique: true,
    },
    jobs_id: {
      type: DataTypes.INTEGER,
    },
    applicants_nik: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Nik can not be empty",
        },
        isInt: {
          msg: "Only number allowed",
        },
        len: {
          args: [16, 16],
          msg: "nik value length is 16",
        },
      },
    },

    name: {
      type: DataTypes.STRING,
    },
    documents_nik: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Nik can not be empty",
        },
        isInt: {
          msg: "Only number allowed",
        },
        len: {
          args: [16, 16],
          msg: "nik value length is 16",
        },
      },
    },
    status: {
      type: DataTypes.STRING,
    },
    medical_check: {
      type: DataTypes.STRING,
    },
    grade: {
      type: DataTypes.INTEGER,
    },
    next_selection: {
      type: DataTypes.STRING,
    },
    time_selection: {
      type: DataTypes.DATE,
    },
    time: {
      type: DataTypes.STRING,
    },
    place: {
      type: DataTypes.STRING,
    },
    timetable: {
      type: DataTypes.TEXT,
    },
    tahap_seleksi: {
      type: DataTypes.STRING,
    },
    interviewer_id: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    position: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

(async function () {
  await db.sync();
});

// Application.hasMany(Job)
// Job.hasMany(Application)

export default Application;
