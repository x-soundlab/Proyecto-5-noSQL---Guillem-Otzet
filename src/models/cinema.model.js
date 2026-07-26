//Importamos mongoose para hacer un nuevo Schema de Mongo
const mongoose = require("mongoose");

//Definimos el esquema de nuestros cines
const cinemaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

//Creamos el modelo en base al esquema que hemos configurado
const Cinema = mongoose.model("Cinema", cinemaSchema);

module.exports = Cinema;
