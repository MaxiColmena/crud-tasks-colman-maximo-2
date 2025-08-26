import { sequelize } from "./database.js";

export const startDB = async() => {
    try {
        await sequelize.authenticate();
        console.log("conectado a la base de datos")
        await sequelize.sync({force: true});
    } catch (error) {
        console.log("Error al conectarse a la base de datos", error);
    }
};