import connection from "../Config/DbConfig.js";
import { DataTypes } from 'sequelize'


export const OtpData = connection.define("Register_Otps", {
    Otp_Id: { primaryKey: true,type:DataTypes.INTEGER,autoIncrement:true },
    Otp_Requested_By: {
        type: DataTypes.STRING,

        allowNull: false
    },
    Otp_Requested_Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Otp: {
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