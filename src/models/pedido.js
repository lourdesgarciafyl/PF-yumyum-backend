import mongoose, { Schema } from 'mongoose';

const pedidoSchema = new Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario' },
  fechaPedido: {
    type: 'Date',
    required: true,
    default: Date.now(),
  },
  productos: [
    {
      producto: { type: mongoose.Schema.Types.ObjectId, ref: 'producto' },
      cantidad: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
      },
      subtotalItem: {
        type: Number,
        required: true,
        min: 1,
        max: 100000,
      },
    },
  ],
  estado: {
    type: String,
    required: true,
    MinLength: 3,
    maxLength: 20,
  },
  precioTotal: {
    type: Number,
    required: true,
    min: 1,
    max: 100000,
  },
});

const Pedido = mongoose.model('pedido', pedidoSchema);
export default Pedido;