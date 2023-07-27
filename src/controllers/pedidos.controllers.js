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
  
  export const obtenerListaPedidos = async (req, res) => {
    try {
      //buscar en la BD la collection de pedidos
      const pedidos = await Pedido.find()
        .populate({
          path: 'productos.producto',
          select: '-_id -__v', // Opcional: selecciona los campos que deseas excluir, como _id y __v
        })
        .populate({
          path: 'usuario',
          select: '-_id -password -estado -perfil -__v', //  Opcional: selecciona los campos que deseas excluir, como _id y __v -password -estado -perfil
        });
  
  
      res.status(200).json(pedidos);
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: 'Error al intentar listar los pedidos',
      });
    }
  };
  