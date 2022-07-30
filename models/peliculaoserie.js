import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//import { Personaje } from "../models/personaje.js";

export const PeliculaOSerie = sequelize.define("peliculasoseries", {
  imagen: {
    type: DataTypes.STRING,
  },
  titulo: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  fechadecreacion: {
    type: DataTypes.STRING,
  },
  calificacion: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 6,
    },
  },
  personajes_asociados: {
    type: DataTypes.STRING,
  },
});