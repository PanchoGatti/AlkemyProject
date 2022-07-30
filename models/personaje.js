import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//import { PeliculaOSerie } from "../models/peliculaoserie.js";

export const Personaje = sequelize.define("personajes", {
  imagen: {
    type: DataTypes.STRING
  },
  nombre: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  edad: {
    type: DataTypes.INTEGER,
  },
  peso: {
    type: DataTypes.DOUBLE,
  },
  historia: {
    type: DataTypes.STRING,
  },
  peliculas_o_series_asociadas: {
    type: DataTypes.STRING
  },
});