//Importamos el modelo de películas para utilizar los métodos de Mongo
const Movie = require("../models/movie.model");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo las películas",
      error: error.message,
    });
  }
};

const getMovieByID = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "Película no encontrada" });
    }
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo la película",
      error: error.message,
    });
  }
};

const getMoviesByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const movies = await Movie.find({ title });
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo las películas por título",
      error: error.message,
    });
  }
};

const getMoviesByGenre = async (req, res) => {
  try {
    const { genre } = req.params;
    const movies = await Movie.find({ genre });
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo las películas por género",
      error: error.message,
    });
  }
};

const getMoviesFromYear = async (req, res) => {
  try {
    const { year } = req.params;
    const movies = await Movie.find({ year: { $gte: year } });
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo las películas por año",
      error: error.message,
    });
  }
};

const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    return res.status(201).json(savedMovie);
  } catch (error) {
    return res.status(500).json({
      message: "Error creando la película",
      error: error.message,
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res
        .status(404)
        .json({ message: "Película a borrar no encontrada" });
    }
    return res.status(200).json({ message: "Película borrada correctamente" });
  } catch (error) {
    return res.status(500).json({
      message: "Error borrando la película",
      error: error.message,
    });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedMovie) {
      return res
        .status(404)
        .json({ message: "No se encuentra la película a actualizar" });
    }
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(500).json({
      message: "Error actualizando la película",
      error: error.message,
    });
  }
};

module.exports = {
  getMovies,
  getMovieByID,
  getMoviesByTitle,
  getMoviesByGenre,
  getMoviesFromYear,
  createMovie,
  deleteMovie,
  updateMovie,
};
