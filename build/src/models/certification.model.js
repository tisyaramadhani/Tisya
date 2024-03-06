import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Certification = db.define(
  "certifications",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "certification can not be empty"
        }
      }
    },
  },
  {
    freezeTableName: true,
  }
);

(async function () {
  await db.sync();
});

export default Certification;
