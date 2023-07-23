import { json } from "express";
import Producto from "../models/producto";


export const crearProducto = async (req, res) => {
    try{
        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        res.status(201).json({
            mensaje: "El producto fue creado correctamente"
        })
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error. No se pudo crear el producto"
        })
    }
}

export const obtenerListaProductos = async (req, res) =>{
    try{
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error. No se pudo obtener la lista de productos"
        })
    }
}

