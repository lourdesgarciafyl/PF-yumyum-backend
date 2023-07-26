import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import "./src/database/dbConnection"
import productosRouter from "./src/routes/productos.routes"
import categoriasRouter from "./src/routes/categorias.routes"

dotenv.config();
const app = express();
app.set("PORT", process.env.PORT || 4010)
app.listen(app.get("PORT"), () =>{
    console.log("Estoy en el puerto "+ app.get("PORT"))
})

app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(cors()); 
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, `/public`)))

// http://localhost:4010/apiyumyum
app.use(`/apiyumyum/productos`, productosRouter)
app.use(`/apiyumyum/categorias`, categoriasRouter)