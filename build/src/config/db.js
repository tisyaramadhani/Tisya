import { config } from "dotenv";
import { Sequelize } from "sequelize";
config();

const DBNAME = process.env.DBNAME;
const PASSWORD = process.env.PASSWORD;
const HOST_DB = process.env.HOST_DB;

const db = new Sequelize(DBNAME, "root", PASSWORD, {
  dialectOptions: {
    dateStrings: true,

    typeCast: function (field, next) {
      // for reading from database
      if (field.type === "DATETIME") {
        return field.string();
      }
      return next();
    },
  },
  timezone: "+07:00",
  host: HOST_DB,
  dialect: "mysql",
});

export default db;
