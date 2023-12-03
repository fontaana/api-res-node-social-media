//Importaciones
const {connectWithRetry} = require("./database/conection")
const cors = require("cors")
const express= require("express")

//Mensaje de Inicio

console.log("API arrancada")
//Conexion a base de datos
connectWithRetry()

//Crear Serividor Node
const app = express()
const puerto= 3900

//Configurar Cors
app.use(cors())

//Convertir los datos del body a objeto js

app.use(express.json())
app.use(express.urlencoded({extended:true}))//Datos a de este formato a objeto JS

//Cargar rutas
const UserRoutes = require("./routes/user")
const PublicationRoutes = require("./routes/pubication")
const FollowRoutes = require("./routes/follow")

app.use("/api", UserRoutes)
app.use("/api", PublicationRoutes)
app.use("/api", FollowRoutes)

//Poner servidor a escuchar peticiones htpp
app.listen(puerto, () =>{
    console.log("Serividor corriendo en el puerto: ",puerto)
})

