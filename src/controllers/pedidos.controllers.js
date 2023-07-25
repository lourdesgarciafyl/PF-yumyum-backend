import Pedido from "../models/pedido";

export const crearPedido = async (req, res) => {
    try{
        const pedidoNuevo = new Pedido(req.body);
        await pedidoNuevo.save();
        res.status(201).json({
            mensaje: "El pedido fue creado correctamente."
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error. No se pudo crear el nuevo pedido."
        });
    }
};