import { Router } from "express";
import validarProducto from "../helpers/validarProducto";
import {crearProducto, obtenerListaProductos } from "../controllers/productos.controllers";

const router = Router();
router.route("/").post(validarProducto, crearProducto).get(obtenerListaProductos)

// otra ruta para las peticiones faltantes

export default router;