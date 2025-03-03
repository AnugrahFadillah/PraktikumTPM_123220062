import { Sequelize } from "sequelize";

const db = new Sequelize('crud_api', 'root', '', {
    host: '34.58.0.73',
    dialect: 'mysql'
})

export default db;