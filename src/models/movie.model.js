//Importamos mongoose para hacer un nuevo Schema de Mongo
const mongoose = require("mongoose");

//Definimos el esquema de nuestras películas
const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    director: { type: String, required: true, trim: true },
    year: { type: Number, required: true, max: 2300 },
    genre: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

//Creamos el modelo en base al esquema que hemos configurado
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
