import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import mysql2 from 'mysql2';

dotenv.config();

const connection = new Sequelize(process.env.database_name, process.env.databaseUser, process.env.databasePassword, {
    host: process.env.databaseHost,
    dialect: 'mysql', // Choose 'mysql', 'sqlite', 'mariadb', 'mssql' based on your DB
    logging: false,
    dialectModule: mysql2,
    dialectOptions: {
        charset: 'utf8mb4'
    },

});

connection.authenticate().then((response)=>{
    console.log('connection success')
}).catch((error)=>{
    console.log(error)
    console.log("connection error : " + error)
})

export default connection