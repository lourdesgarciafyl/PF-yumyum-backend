import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 50
    },
    precio:{
        type: Number,
        required: true,
        min: 100,
        max: 10000
    },
    imagen:{
        type: String,
        required: true
    },
    detalle:{
        type: String,
        required: true,
        minLength: 5,
        maxLength: 500        
    },
    estado:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    }
})

const Producto = mongoose.model(`producto`, productoSchema) 

export default Producto;