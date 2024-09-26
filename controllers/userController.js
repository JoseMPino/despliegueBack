
const ModeloUser = require('../models/modelUser');
const userCtrol ={};
// Crear un usuario
userCtrol.crearUser=async(req,res)=> {
    const body = req.body;
    try{
    const respuesta = await ModeloUser.create(body)
    res.status(201).send(respuesta)
    }catch(error){
        // Si el código de error es 11000 (clave duplicada)
        if (error.code === 11000) {
            //status es el estado o la respuesta  que se envia cuando se hace u  proceso
            res.status(400).json({ message: "El correo ya está en uso. Por favor, utiliza otro correo." });
        } else {
            res.status(500).json({ message: "Error en el servidor", error: error.message });
        }
    }
}

//consultar o Ver info de los usuarios
userCtrol.consultarUsers=async (req,res)=>{
    const respuesta = await ModeloUser.find({})
    res.send(respuesta)
}

//consultar o ver usuario por id

userCtrol.consultarUser = async (req,res)=> {
    const id = req.params.id;
    const respuesta = await ModeloUser.findById({_id:id})
    res.send(respuesta)

}

//Actualizar info de un usuario
userCtrol.updateUser= async(req, res)=> {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModeloUser.findByIdAndUpdate({_id:id},body);
    res.send(respuesta)
}

//eliminar
userCtrol.deleteUser= async(req,res)=>{
    const id = req.params.id;
    const respuesta = await ModeloUser.deleteOne({_id:id})
    res.send(respuesta)
}

module.exports = userCtrol;