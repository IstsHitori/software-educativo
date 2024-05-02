import mongoose from "mongoose";

const clasificacionSchema = mongoose.Schema({
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
    },
    puntaje:{
        type:String,
        required:true
    }
});

const Clasificacion = mongoose.model("Clasificacion",clasificacionSchema);
export default Clasificacion;