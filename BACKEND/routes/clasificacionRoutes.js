import express from "express"
import checkAuth from "../middleware/authMiddleware.js";
import { registrarPuntuacion,obtenerPuntuaciones } from "../controllers/clasificacionController.js";
const router = express.Router();

router.post("/registrar-puntuacion",checkAuth,registrarPuntuacion).get("/obtener-puntuaciones",checkAuth,obtenerPuntuaciones);


export default router;