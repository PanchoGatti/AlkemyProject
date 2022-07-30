import app from "./app.js";
import { sequelize } from "../database/database.js";

//import "../models/user.js"
//import '../models/personaje.js'
//import "../models/peliculaoserie.js";
import "../models/genero.js";
import "../models/asociaciones.js";

async function main() {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully");
    app.listen(8000, () => {
      console.log("Conectado al puerto 8000");
    });
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

main();
