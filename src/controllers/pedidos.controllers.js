import Pedido from "../models/pedido";

export const crearPedido = async (req, res) => {
    try {
      const pedidoNuevo = new Pedido(req.body);
      await pedidoNuevo.save();
      res.status(201).json({
        mensaje: 'El pedido fue creado correctamente.',
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensaje: 'Error no se pudo crear un pedido',
      });
    }
  };
  