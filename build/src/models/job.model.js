import { DataTypes } from "sequelize";
import db from "./../config/db.js";

const Job = db.define(
  "jobs",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Position can not be empty",
        },
      },
    },
    section: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Section can not be empty",
        },
      },
    },
    qualification: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Qualification can not be empty",
        },
      },
    },
    estimated_joining: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Estimated joining can not be empty",
        },
      },
    },
    timeline: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Timeline can not be empty",
        },
      },
    },
    application_open: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Application open can not be empty",
        },
      },
    },
    application_close: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Application close can not be empty",
        },
      },
    },
    about_company: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "About Company can not be empty",
        },
      },
    },
    status: {
      type: DataTypes.INTEGER,
    },
    create_by: {
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

export default Job;
