import Usuario from "../models/Usuario.js";
import generarJWT from "../helpers/generarJWT.js";
const registrar = async(req,res) => {
    const {usuario} = req.body;
    try{
        //Buscando usuarios duplicados
        const existeUsuario = await Usuario.findOne({usuario})
        if(existeUsuario){
            const error = new Error("Este usuario ya existe");
            return res.status(400).json({msg:error.message});
        }

        const USUARIO = new Usuario(req.body);
        const USUARIO_GUARDADO = await USUARIO.save();
        res.json(USUARIO_GUARDADO)
    }catch(error){
        console.log(error);
    }
    console.log(usuario)
}

const autenticar = async(req,res) => {
    const {usuario} = req.body;

    const existeUsuario = await Usuario.findOne({usuario});
    if(!existeUsuario){
        return res.status(403).json({msg:"El usuario no existe"});
    }    
    console.log(existeUsuario._id)
    res.json({token:generarJWT(existeUsuario._id)});
}

const perfil = async(req,res) => {
    res.json({perfil:req.usuario});
}
export {
    registrar,autenticar,perfil
}