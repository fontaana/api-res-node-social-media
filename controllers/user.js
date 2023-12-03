const UserValidator = require("../validaciones/user")
const User= require("../models/User")
//Acciones de prueba

const pruebaUser= (req,res) =>{
    return res.status(200).send({
        message:"Mensaje enviado desde: controllers/user.js"
    })
}

//Registro
const register= (req,res) =>{
    let params= req.body
    try{
        UserValidator(params)
}
    catch (error){ 
        return res.status(400).send({
            message: error.message,
            status: "error",
        })
    }
    let user_to_save = new User(params)
    User.find()
    return res.status(200).send({
        status:"success",
        message:"Usuario registrado",
        params
    })
}


//Exportar acciones
module.exports={
    pruebaUser,
    register
}