import { DataTypes } from "sequelize";
import db from "./../config/db.js";

const Interviewer = db.define(
  "interviewers",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },
    nik: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name can not be empty",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    selfie: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

(async function () {
  await db.sync();
});

export default Interviewer;
