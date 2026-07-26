//Importamos el modelo de cines para utilizar los métodos de Mongo
const Cinema = require("../models/cinema.model");

const getCinemas = async (req, res) => {
  try {
    const cinemas = await Cinema.find().populate("movies");
    return res.status(200).json(cinemas);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo los cines",
      error: error.message,
    });
  }
};

module.exports = {
  getCinemas,
};
