const express = require ("express")
const router = express.router()
const followController = require("../controllers/follow")

//Definir Rutas
router.get("/prueba-usuario", followController.pruebaFollow)

//Exportar router
module.exports= {router}