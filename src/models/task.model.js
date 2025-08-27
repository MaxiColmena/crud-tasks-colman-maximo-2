import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { User } from "./user.models.js";

export const Task = sequelize.define("tasks",{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
},{
        timestamps: false
    });
