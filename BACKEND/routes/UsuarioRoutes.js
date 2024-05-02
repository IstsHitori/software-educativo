import express from "express";
import checkAuth from "../middleware/authMiddleware.js";
import { registrar,autenticar,perfil } from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/",registrar);

router.post("/juego",autenticar);

router.get("/perfil",checkAuth,perfil)
export default router;