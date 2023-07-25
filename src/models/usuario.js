import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  apellidoUsuario: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 40,
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 60,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 100,
  },
  estado: {
    type: String,
    required: true,
  },
  perfil: {
    type: String,
    required: true,
  },
});

const Producto = mongoose.model(`producto`, productoSchema);

export default Producto;
