//Importamos express
const express = require("express");
//Importamos la función de conexión con MongoDB
const connectDB = require("./src/config/connect");
//Importamos el router de las películas
const moviesRouter = require("./src/routes/movies.routes");
//Importamos el router de los cines
const cinemasRouter = require("./src/routes/cinemas.routes");

//Creamos el servidor
const server = express();
//Le indicamos que vamos a tratar con datos json
server.use(express.json());
//Nos conectamos con MongoDB
connectDB();

//Definimos el puerto
const PORT = 8081;

//RUTAS
server.use("/api/movies", moviesRouter);
server.use("/api/cinemas", cinemasRouter);

//Ruta no encontrada
server.use((req, res) => {
  return res.status(404).json({ error: "Route not found" });
});

//Levantamos el servidor
server.listen(PORT, () => {
  console.log(`✅ Servidor levantado en http://localhost:${PORT}`);
});
