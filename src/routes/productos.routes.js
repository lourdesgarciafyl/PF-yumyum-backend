import { Router } from "express";
import validarProducto from "../helpers/validarProducto";
import validarEstadoProducto from "../helpers/validarEstadoProducto";
import {activarProducto, consultaProductosPorCategoria, crearProducto, desactivarProducto, editarProducto, obtenerListaProductos, obtenerProducto, borrarProducto } from "../controllers/productos.controllers";
import validarJWT from "../helpers/tokenVerificacion";

const router = Router();
router.route("/").post([validarJWT, validarProducto], crearProducto).get(obtenerListaProductos)
router.route("/:id").get(obtenerProducto).delete(borrarProducto).put(validarProducto, editarProducto)
router.route("/categoria/:categoria").get(consultaProductosPorCategoria)
router.route("/activar/:id").put(validarEstadoProducto, activarProducto)
router.route("/desactivar/:id").put(validarEstadoProducto, desactivarProducto)

export default router;