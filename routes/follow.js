const express = require ("express")
const router = express.Router()
const followController = require("../controllers/follow")

//Definir Rutas
router.get("/prueba-follow", followController.pruebaFollow)

//Exportar router
module.exports= router