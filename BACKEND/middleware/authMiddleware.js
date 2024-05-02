import jwt  from "jsonwebtoken"
import Usuario from "../models/Usuario.js";

const checkAuth = async (req, res, next) => {
    let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try{
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = await Usuario.findById(decoded.id);
        return next();
    }catch(e){
        const error = new Error("Token inexistente");
        return res.status(403).json({ msg: error.message });
      };
    }
  if(!token){
    const error = new Error("Token inexistente");
    res.status(403).json({ msg: error.message });
  }
  next();
}

export default checkAuth;
