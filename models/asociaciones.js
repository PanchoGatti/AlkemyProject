import { Personaje } from "./personaje.js";
import { PeliculaOSerie } from "./peliculaoserie.js";
import { Genero } from "./genero.js"

Personaje.belongsToMany(PeliculaOSerie, { through: "PersonajesPeliculas" });
PeliculaOSerie.belongsToMany(Personaje, { through: "PersonajesPeliculas" });

//Genero.hasMany(PeliculaOSerie, {
//     foreignKey: 'genNombre',
//     sourceKey: PeliculaOSerie.titulo
// })
// PeliculaOSerie.belongsTo(Genero, {
//     foreignKey: 'nombre',
//     targetId: 'titulo'
// })