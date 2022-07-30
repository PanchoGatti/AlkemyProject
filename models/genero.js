import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Genero = sequelize.define('generos',{
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagen:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    peliculas_o_series_asociadas:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})    