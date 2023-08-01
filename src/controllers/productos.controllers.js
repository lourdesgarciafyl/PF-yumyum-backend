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

export const editarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: 'El producto fue editado correctamente.',
    });
  } catch (error) {
    if(error.code === 11000){
      return res.status(404).json({
        mensaje: 'Este nombre de producto ya existe. Intente con otro.',
      });
    }
    res.status(404).json({
      mensaje: 'Error, no se pudo editar el producto.',
    });
  }
};

export const obtenerProducto = async (req, res) =>{
  try{
     console.log(req.params.id)
     const producto = await Producto.findById(req.params.id);
     res.status(200).json(producto);
  }catch(error){
      console.log(error)
      res.status(404).json({
          mensaje: "Error, no se pudo obtener el producto."
      })
  }
}

export const borrarProducto = async (req, res) =>{
  try{
     await Producto.findByIdAndDelete(req.params.id);
     res.status(200).json({
      mensaje: "El producto fue eliminado correctamente"
     })
  }catch(error){
      console.log(error)
      res.status(404).json({
          mensaje: "Error, el producto no se pudo borrar"
      })
  }
};

export const consultaProductosPorCategoria = async (req, res) => {
  try {
    const producto = await Producto.find({categoria: req.params.categoria});
    res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al intentar obtener el/los producto/s por categoría',
    });
  }
};

export const activarProducto = async (req, res) => {
  const idProducto = req.params.id;
  try {
    const producto = await Producto.findById(idProducto);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    if (producto.estado === 'Activo') {
      return res
        .status(404)
        .json({ error: 'El producto ya se encuentra activo' });
    }
    producto.estado = 'Activo';
    await producto.save();
    res.status(200).json({
      mensaje: 'Se activó el producto correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error, no se pudo activar el producto.',
    });
  }
};

export const desactivarProducto = async (req, res) => {
  const idProducto = req.params.id;
  try {
    const producto = await Producto.findById(idProducto);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    if (producto.estado === 'Inactivo') {
      return res
        .status(404)
        .json({ error: 'El producto ya se encuentra inactivo.' });
    }
    producto.estado = 'Inactivo';
    await producto.save();
    res.status(200).json({
      mensaje: 'Se desactivó el producto correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error, no se pudo desactivar el producto.',
    });
  }
};
