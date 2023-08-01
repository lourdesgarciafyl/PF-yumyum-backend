import Pedido from "../models/pedido";

export const crearPedido = async (req, res) => {
  try {
    const pedidoNuevo = new Pedido(req.body);
    await pedidoNuevo.save();
    res.status(201).json({
      mensaje: "El pedido fue creado correctamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error no se pudo crear un pedido",
    });
  }
};

export const obtenerListaPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find()
      .populate({
        path: "productos.producto",
        select: "-_id -__v", 
      })
      .populate({
        path: "usuario",
        select: "-_id -password -estado -perfil -__v", 
      });
    res.status(200).json(pedidos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar listar los pedidos",
    });
  }
};

export const obtenerPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id)
      .populate({
        path: "productos.producto",
        select: "-_id -__v",
      })
      .populate({
        path: "usuario",
        select: "-_id -password -estado -perfil -__v",
      });
    res.status(200).json(pedido);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se pudo obtener el pedido.",
    });
  }
};

export const entregarPedido = async (req, res) => {
  const idPedido = req.params.id;
  try {
    const pedido = await Pedido.findById(idPedido);
    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }

    if (pedido.estado === "Entregado") {
      return res
        .status(404)
        .json({ error: "El pedido ya se encuentra en Entregado" });
    }

    pedido.estado = "Entregado";
    await pedido.save();
    res.status(200).json({
      mensaje: "Se entregó el pedido correctamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se pudo pasar a entregado el pedido.",
    });
  }
};

export const pedidoEnProceso = async (req, res) => {
  const idPedido = req.params.id;
  try {
    const pedido = await Pedido.findById(idPedido);
    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }
    if (pedido.estado === "En proceso") {
      return res
        .status(404)
        .json({ error: "El pedido ya se encuentra en proceso" });
    }
    pedido.estado = "En proceso";
    await pedido.save();
    res.status(200).json({
      mensaje: "El pedido esta en proceso.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error, no se pudo pasar a "en proceso" el pedido.',
     }); 
   } 
};

export const borrarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id);
    if (!pedido) {
      return res.status(404).json({
        mensaje: "El pedido no fue encontrado.",
      });
    }
    await Pedido.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Pedido eliminado exitosamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "No se pudo eliminar el pedido.",
    });
  }
};
