import mongoose, { Schema } from 'mongoose';

const categoriaSchema = new Schema({
  nombreCategoria: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 20,
  },
  estado: {
    type: String,
    required: true,
  },
});

const Categoria = mongoose.model(`categoria`, categoriaSchema);

export default Categoria;
