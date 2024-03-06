import { DataTypes } from "sequelize";
import db from "./../config/db.js";

const ProfileCompany = db.define(
  "profile_company",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Text can not be empty"
        }
      }
    },
    photo: {
      type: DataTypes.TEXT,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "CV can not be empty"
      //   }
      // },
    },
  },
  {
    freezeTableName: true,
  }
);

(async function () {
  await db.sync();
});

export default ProfileCompany;
