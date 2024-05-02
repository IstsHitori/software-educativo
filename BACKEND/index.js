import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js"
import clasificacionRoutes from "./routes/clasificacionRoutes.js"
const app = express();
app.use(express.json());
dotenv.config()

conectarDB();

app.use("/api/educativo", usuarioRoutes);
app.use("/api/clasificacion",clasificacionRoutes)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
