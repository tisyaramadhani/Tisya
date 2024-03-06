import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Attendance = db.define(
  "attendance",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    no_test: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    position: {
      type: DataTypes.STRING,
    },
    next_selection: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ENUM("Laki-laki", "Perempuan"),
    },
    domisili: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    kehadiran: {
      type: DataTypes.ENUM("Ya", "Tidak"),
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    freezeTableName: true,
  }
);

(async function () {
  await db.sync();
});

export default Attendance;
