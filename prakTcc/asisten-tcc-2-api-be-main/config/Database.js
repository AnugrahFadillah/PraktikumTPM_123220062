import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("crud_api", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
