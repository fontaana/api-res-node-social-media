const pruebaPublication= (req,res) =>{
    return res.status(200).send({
        message:"Mensaje enviado desde: controllers/user.js"
    })
}

//Exportar acciones
module.exports={
    pruebaPublication
}