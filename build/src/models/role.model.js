import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Role = db.define("roles", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
)

(async function() {
  await db.sync();
})

export default Role