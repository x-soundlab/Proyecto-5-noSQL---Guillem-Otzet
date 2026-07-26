const movies = [
  {
    title: "The Matrix",
    director: "Hermanas Wachowski",
    year: 1999,
    genre: "Acción",
  },
  {
    title: "The Matrix Reloaded",
    director: "Hermanas Wachowski",
    year: 2003,
    genre: "Acción",
  },
  {
    title: "Buscando a Nemo",
    director: "Andrew Stanton",
    year: 2003,
    genre: "Animación",
  },
  {
    title: "Buscando a Dory",
    director: "Andrew Stanton",
    year: 2016,
    genre: "Animación",
  },
  {
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Ciencia ficción",
  },
  {
    title: "50 primeras citas",
    director: "Peter Segal",
    year: 2004,
    genre: "Comedia romántica",
  },
];

const cinemas = [
  {
    name: "Cine Centro",
    city: "Madrid",
    address: "Calle Principal 10",
    movieTitles: ["The Matrix", "Interestelar"],
  },
  {
    name: "Cine Norte",
    city: "Bilbao",
    address: "Avenida del Cine 25",
    movieTitles: ["Buscando a Nemo", "Buscando a Dory"],
  },
  {
    name: "Cine Mediterráneo",
    city: "Barcelona",
    address: "Calle de la Pantalla 8",
    movieTitles: [
      "The Matrix Reloaded",
      "50 primeras citas",
      "Interestelar",
    ],
  },
];

module.exports = {
  movies,
  cinemas,
};
