const express = require ("express")
const router = express.router()
const UserController = require("../controllers/user")

//Definir Rutas
router.get("/prueba-usuario", UserController.pruebaUser)

//Exportar router
module.exports= {router}