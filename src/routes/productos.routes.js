import { Router } from "express";
import validarProducto from "../helpers/validarProducto";
import {consultaProductosPorCategoria, crearProducto, editarProducto, obtenerListaProductos } from "../controllers/productos.controllers";

const router = Router();
router.route("/").post(validarProducto, crearProducto).get(obtenerListaProductos)
router.route("/:id").put(validarProducto, editarProducto)
router.route("/categoria/:categoria").get(consultaProductosPorCategoria)

export default router;