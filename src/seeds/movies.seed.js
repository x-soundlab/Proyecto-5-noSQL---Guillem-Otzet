//Importamos mongoose porque nos vamos a conectar y desconectar de la base de datos
const mongoose = require("mongoose");
//Importamos el modelo de Películas porque vamos a usar métodos de Mongo para hacer la colección y manipularla
const Movie = require("../models/movie.model");
//Importamos el array de películas que vamos a inyectar
const { movies } = require("./data");

//Vamos a convertir nuestras películas "normales" en películas de MongoDB mediante el modelo
const moviesDocuments = movies.map((movie) => new Movie(movie));

//Vamos a conectarnos con la base de datos
mongoose
  .connect("mongodb://localhost:27017/moviesdb")
  .then(async () => {
    //Intentamos encontrar en nuestra DB si hay alguna película
    const allMovies = await Movie.find();
    //Comprobamos que hay películas en la DB
    if (allMovies.length) {
      //Si hay algo en la DB en la colección movies, lo borramos
      await Movie.collection.drop();
      console.log("Colección de películas borrada");
    }
  })
  .catch((error) => {
    console.log(error.message);
  })
  .then(async () => {
    //Como ya hemos comprobado si había o no había películas, ahora las insertamos
    await Movie.insertMany(moviesDocuments);
    console.log("Películas insertadas en la DB exitosamente");
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => mongoose.disconnect()); //Por seguridad, cortamos la conexión con la DB
