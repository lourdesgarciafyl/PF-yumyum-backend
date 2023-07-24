import mongoose, { mongo } from "mongoose";
import "dotenv/config"

const uri = "mongodb://127.0.0.1:27017/yumyum"
mongoose.connect(uri)

const datosConexion = mongoose.connection;
datosConexion.once("open", ()=>{
    console.log("Conexión exitosa a la base de datos")
})