const express = require("express");
const { getCinemas } = require("../controllers/cinemas.controllers");

//Creamos el router
const router = express.Router();

//Creamos las rutas
router.get("/", getCinemas);

module.exports = router;
