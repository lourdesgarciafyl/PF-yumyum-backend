import { Router } from "express";
import validarProducto from "../helpers/validarProducto";
import {activarProducto, consultaProductosPorCategoria, crearProducto, desactivarProducto, editarProducto, obtenerListaProductos, obtenerProducto, borrarProducto, obtenerProductosActivos } from "../controllers/productos.controllers";
import validarJWT from "../helpers/tokenVerificacion";


const router = Router();
router.route("/").post([validarJWT, validarProducto], crearProducto).get(obtenerListaProductos)
router.route("/activos").get(obtenerProductosActivos)
router.route("/:id").get(obtenerProducto).delete(validarJWT, borrarProducto).put([validarJWT, validarProducto], editarProducto)
router.route("/categoria/:categoria").get(consultaProductosPorCategoria)
router.route("/activar/:id").put(validarJWT, activarProducto)
router.route("/desactivar/:id").put(validarJWT, desactivarProducto)

export default router;