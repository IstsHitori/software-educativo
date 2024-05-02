import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    usuario: {
        type:String,
        required:true,
        trim:true,
        unique:true
    },
});

const Usuario = mongoose.model("Usuario",usuarioSchema);

export default Usuario;