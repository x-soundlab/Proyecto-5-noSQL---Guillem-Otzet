const express = require("express");
const {
  getMovies,
  getMovieByID,
  getMoviesByTitle,
  getMoviesByGenre,
  getMoviesFromYear,
  createMovie,
  deleteMovie,
  updateMovie,
} = require("../controllers/movies.controllers");

//Creamos el router
const router = express.Router();

//Creamos las rutas
router.get("/", getMovies);
router.get("/:id", getMovieByID);
router.get("/title/:title", getMoviesByTitle);
router.get("/genre/:genre", getMoviesByGenre);
router.get("/year/:year", getMoviesFromYear);
router.post("/", createMovie);
router.delete("/:id", deleteMovie);
router.put("/:id", updateMovie);

module.exports = router;
