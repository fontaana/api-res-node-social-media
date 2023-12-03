const validator = require("validator")
const validarUser = params =>{
    if(!params.name || !params.email || !params.password || !params.nick){
        throw new Error("Ha faltado enviar datos obligatorios")
    }
    
}

module.exports = validarUser