//Importamos mongoose porque nos vamos a conectar y desconectar de la base de datos
const mongoose = require("mongoose");
//Importamos los modelos que necesitamos para crear la colección de cines
const Cinema = require("../models/cinema.model");
const Movie = require("../models/movie.model");
//Importamos el array de cines que vamos a inyectar
const { cinemas } = require("./data");

//Vamos a conectarnos con la base de datos
mongoose
  .connect("mongodb://localhost:27017/moviesdb")
  .then(async () => {
    //Intentamos encontrar en nuestra DB si hay algún cine
    const allCinemas = await Cinema.find();
    //Comprobamos que hay cines en la DB
    if (allCinemas.length) {
      //Si hay algo en la colección cinemas, lo borramos
      await Cinema.collection.drop();
      console.log("Colección de cines borrada");
    }
  })
  .catch((error) => {
    console.log(error.message);
  })
  .then(async () => {
    //Recuperamos las películas para guardar sus identificadores en cada cine
    const allMovies = await Movie.find();

    if (!allMovies.length) {
      throw new Error(
        "Primero debes ejecutar la seed de películas: npm run seed:movies",
      );
    }

    const cinemasDocuments = cinemas.map((cinema) => {
      const moviesIDs = allMovies
        .filter((movie) => cinema.movieTitles.includes(movie.title))
        .map((movie) => movie._id);

      return new Cinema({
        name: cinema.name,
        city: cinema.city,
        address: cinema.address,
        movies: moviesIDs,
      });
    });

    //Insertamos los cines con las referencias de las películas
    await Cinema.insertMany(cinemasDocuments);
    console.log("Cines insertados en la DB exitosamente");
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => mongoose.disconnect()); //Por seguridad, cortamos la conexión con la DB
