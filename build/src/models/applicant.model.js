import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Applicant = db.define(
  "applicants",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
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
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Name can not be empty",
        },
      },
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "Name can not be empty"
      //   }
      // }
    },
    place_of_birth: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "Place of birth can not be empty"
      //   }
      // }
    },
    date_of_birth: {
      type: DataTypes.DATE,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "Date of birth can not be empty"
      //   }
      // }
    },
    gender: {
      type: DataTypes.ENUM("Laki-laki", "Perempuan"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "Gender can not be empty"
      //   }
      // }
    },
    height: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "Height can not be empty"
      //   }
      // }
    },
    weight: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "Weight can not be empty"
      //   }
      // }
    },
    marital_status: {
      type: DataTypes.ENUM("Belum Menikah", "Sudah Menikah"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "marital status can not be empty"
      //   }
      // }
    },
    address_ktp: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "address ktp can not be empty"
      //   }
      // }
    },
    address: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "address can not be empty"
      //   }
      // }
    },
    religion: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "religion can not be empty"
      //   }
      // }
    },
    biological_mother_name: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "biological mother name can not be empty"
      //   }
      // }
    },
    father_name: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "father name can not be empty"
      //   }
      // }
    },
    mother_name: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "mother name can not be empty"
      //   }
      // }
    },
    npwp: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "npwp can not be empty"
      //   }
      // }
    },
    last_education: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "last education can not be empty"
      //   }
      // }
    },
    school_name: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "school name can not be empty"
      //   }
      // }
    },
    major: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "major can not be empty"
      //   }
      // }
    },
    graduation_year: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "graduation year can not be empty"
      //   }
      // }
    },
    ipk: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "no wa can not be empty"
      //   }
      // }
    },
    work_experience_pt: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "work experience pt can not be empty"
      //   }
      // }
    },
    work_experience: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "work experience can not be empty"
      //   }
      // }
    },
    total_work_experience: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "total work experience can not be empty"
      //   }
      // }
    },
    company_name: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "company name can not be empty"
      //   }
      // }
    },
    experience_description: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "experience description can not be empty"
      //   }
      // }
    },
    skills: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "skills can not be empty"
      //   }
      // }
    },
    certification: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "certification can not be empty"
      //   }
      // }
    },
    expected_salary: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "expected salary can not be empty"
      //   }
      // }
    },
    expected_working_time: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "expected working time can not be empty"
      //   }
      // }
    },
    ready_shift: {
      type: DataTypes.ENUM("Ya", "Tidak"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "ready shift can not be empty"
      //   }
      // }
    },
    ready_any_department: {
      type: DataTypes.ENUM("Ya", "Tidak"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "ready any department can not be empty"
      //   }
      // }
    },
    is_studying: {
      type: DataTypes.ENUM("Ya", "Tidak"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "is studying can not be empty"
      //   }
      // }
    },
    is_working: {
      type: DataTypes.ENUM("Ya", "Tidak"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "is working can not be empty"
      //   }
      // }
    },
    vehicle: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "vehicle can not be empty"
      //   }
      // }
    },
    have_sim: {
      type: DataTypes.ENUM("Ya", "Tidak"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "have sim can not be empty"
      //   }
      // }
    },
    nail_long: {
      type: DataTypes.ENUM("Ya", "Tidak"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "nail long can not be empty"
      //   }
      // }
    },
    hospitalized: {
      type: DataTypes.ENUM("Ya", "Tidak"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "hospitalized can not be empty"
      //   }
      // }
    },
    have_disease: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "have disease can not be empty"
      //   }
      // }
    },
    smoking: {
      type: DataTypes.ENUM("Ya", "Tidak"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "smoking can not be empty"
      //   }
      // }
    },
    left_handed: {
      type: DataTypes.ENUM("Ya", "Tidak"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "left handed can not be empty"
      //   }
      // }
    },
    distinguish_colors: {
      type: DataTypes.ENUM("Ya", "Tidak"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "distinguish colors can not be empty"
      //   }
      // }
    },
    is_worked_sbi: {
      type: DataTypes.ENUM("Ya", "Tidak"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "distinguish colors can not be empty"
      //   }
      // }
    },
    ever_worked_sbi: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "ever worked sbi can not be empty"
      //   }
      // }
    },
    ready_follow_rulles: {
      type: DataTypes.ENUM("Ya", "Tidak"),
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "ready follow rulles can not be empty"
      //   }
      // }
    },
    hobby: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "hobby can not be empty"
      //   }
      // }
    },
    special_achievements: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "special achievements can not be empty"
      //   }
      // }
    },
    motivation: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "motivation can not be empty"
      //   }
      // }
    },
    tribe: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "tribe can not be empty"
      //   }
      // }
    },
    no_hp: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [9, 13],
          msg: "no hp value length is 9-13",
        },
      },
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "no hp can not be empty"
      //   }
      // }
    },
    no_wa: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [9, 13],
          msg: "no wa value length is 9-13",
        },
      },
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "no wa can not be empty"
      //   }
      // }
    },
    email: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "email can not be empty"
      //   }
      // }
    },
  },
  {
    freezeTableName: true,
  }
);

(async function () {
  await db.sync();
});

export default Applicant;
