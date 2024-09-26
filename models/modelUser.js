const mongoose = require('mongoose');
const userModel = new mongoose.Schema(
{
    nombresUsuario:{
        type:String
    },
    apellidosUsuario:{
        type:String
    },

    telUsuario:{
        type:String
    },
    correoUsuario:{
        type:String,
        unique: true // este atributo es para que solo permita un correo por usuario y no este duplicado
    }
},
{
    timestamps:true,
    versionKey:false,
    collection: 'usuariosProyect', // se Especifica el nombre exacto de la colección
}

)

const ModeloUser = mongoose.model("usuariosProyect",userModel);
module.exports = ModeloUser;