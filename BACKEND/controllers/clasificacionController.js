import Clasificacion from "../models/Clasificacion.js";
import Usuario from "../models/Usuario.js";
const registrarPuntuacion = async (req,res) => {
    const {usuario,_id} = req.usuario;
    const {puntaje} = req.body;
    try{
  const buscarUsuario = await Usuario.findOne({usuario});
    if(!buscarUsuario){
        const error = new Error("No se encontró el usuario");
        return res.status(403).json({msg:error.message});
    }
    const clasificacion = new Clasificacion({usuario:_id,puntaje});
    await clasificacion.save();
    return res.json({msg:"Se registró la puntuación correctamente"});
    }catch(error) {
        console.log(error)
    }
  
}
const obtenerPuntuaciones = async(req,res) => {
    const {usuario} = req.usuario;
    try{
        const buscarUsuario = await Usuario.findOne({usuario});
        if(!buscarUsuario){
            const error = new Error("No se encontró el usuario");
            return res.status(403).json({msg:error.message});
        }
        const puntuaciones = await Clasificacion.find();
        return res.json({puntuaciones})
    }catch(error){
        console.log(error)
    }
}
export {registrarPuntuacion,obtenerPuntuaciones}