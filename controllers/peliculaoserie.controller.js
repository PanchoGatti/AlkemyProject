import { PeliculaOSerie } from "../models/peliculaoserie.js";

export const getPeliculasOSeries = async (req, res) => {
  try {
    const pelisoseries = await PeliculaOSerie.findAll({
      attributes: ["imagen", "titulo", "fechadecreacion"],
    });

    res.json(pelisoseries);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPeliculaOSerie = async (req, res) => {
  try {
    const { titulo } = req.params;
    const movie = await PeliculaOSerie.findByPk(titulo);
    res.json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPeliculasOSeries = async (req, res) => {
  const { imagen, titulo, fechadecreacion, calificacion, personajes } =
    req.body;

  try {
    const newPeliOSerie = await PeliculaOSerie.create({
      imagen,
      titulo,
      fechadecreacion,
      calificacion,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.send("ok");
};

export const updatePeliculasOSeries = async (req, res) => {
  try {
    const { titulo } = req.params;
    const { imagen, fechadecreacion, calificacion } = req.body;

    const pelioserie = await PeliculaOSerie.findByPk(titulo);
    pelioserie.imagen = imagen;
    pelioserie.fechadecreacion = fechadecreacion;
    pelioserie.calificacion = calificacion;

    await pelioserie.save();

    res.json(pelioserie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePeliculasOSeries = async (req, res) => {
  try {
    const { titulo } = req.params;

    await PeliculaOSerie.destroy({
      where: {
        titulo,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.send("ok");
};
