const express = require ("express")
const router = express.Router()
const publicationController = require("../controllers/publication")

//Definir Rutas
router.get("/prueba-publication", publicationController.pruebaPublication)

//Exportar router
module.exports= router