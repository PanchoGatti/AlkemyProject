import { Personaje } from "../models/personaje.js";

export const getPersonajes = async (req, res) => { 
  try {
    const personajes = await Personaje.findAll({
      attributes: ['imagen', 'nombre']
    });
    
    res.json(personajes);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPersonaje = async (req, res) => {
  try {
    const { nombre } = req.params
    const personaje = await Personaje.findByPk(nombre)
    res.json(personaje)
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const createPersonajes = async (req, res) => {
  const { imagen, nombre, edad, peso, historia } = req.body;

  try {
    const newPersonaje = await Personaje.create({
      imagen,
      nombre,
      edad,
      peso,
      historia,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  //console.log(newPersonaje)
  res.send('ok');
};

export const updatePersonaje = async (req, res) => {
  try {
    const { nombre } = req.params;
    const { imagen, edad, peso, historia } = req.body;

    const personaje = await Personaje.findByPk(nombre);
    personaje.imagen = imagen;
    personaje.edad = edad;
    personaje.peso = peso;
    personaje.historia = historia;

    await personaje.save();

    console.log(personaje);

    res.json(personaje);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePersonaje = async (req, res) => {
  try {
    const { nombre } = req.params;

    await Personaje.destroy({
      where: {
        nombre,
      },
    });

    //console.log(req.params.nombre)
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
    //console.log(error.message)
  }
};
