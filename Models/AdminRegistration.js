import connection from "../Config/DbConfig.js";
import { DataTypes } from 'sequelize'


export const AdminRegistration = connection.define("AdminSchemas", {
    AdminId: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
    AdminLoginToken:{type: DataTypes.STRING,
        allowNull: false},
    AdminName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    BusinessEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
})