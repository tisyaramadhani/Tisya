import { DataTypes } from "sequelize";
import db from "./../config/db.js";

const Document = db.define(
  "documents",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },
    nik: {
      type: DataTypes.STRING,
      unique: true,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "Nik can not be empty"
      //   } ,
      //   isInt: {
      //     msg: "Only number allowed"
      //   },
      //   len: {
      //       args: [16,16],
      //       msg: "nik value length is 16"
      //   }
      // }
    },
    jobs_id: {
      type: DataTypes.INTEGER
    },
    application_letter: {
      type: DataTypes.TEXT,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "application letter can not be empty"
      //   }
      // }
    },
    cv: {
      type: DataTypes.TEXT,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "CV can not be empty"
      //   }
      // },
    },
    ktp: {
      type: DataTypes.TEXT,
      // allowNull: false,
      
    },
    ijazah: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    transkip: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    photo: {
      type: DataTypes.TEXT,
      // allowNull: false,
      
    },
    skck: {
      type: DataTypes.TEXT,
      // allowNull: false,
      
    },
    health_certificate: {
      type: DataTypes.TEXT,
      // allowNull: false,
      
    },
    kk: {
      type: DataTypes.TEXT,
      // allowNull: false,
      
    },
    sim: {
      type: DataTypes.TEXT,
      // allowNull: false,
      
    },
    work_experience_letter: {
      type: DataTypes.TEXT,
      // allowNull: false,
      
    },
    npwp_letter: {
      type: DataTypes.TEXT,
      // allowNull: false,
      
    },
    bpjs_kesehatan: {
      type: DataTypes.TEXT,
      // allowNull: false,
      
    },
    bpjs_ketenagakerjaan: {
      type: DataTypes.TEXT,
      // allowNull: false,
      
    },
    achievements_certificate: {
      type: DataTypes.TEXT,
      // allowNull: false,
      
    },
    competency_certificate: {
      type: DataTypes.TEXT,
      // allowNull: false,
      
    },
    follow_rulles_letter: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

(async function () {
  await db.sync();
});

export default Document;
