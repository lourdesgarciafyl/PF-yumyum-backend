import { Router } from "express";
import validarProducto from "../helpers/validarProducto";
import {activarProducto, consultaProductosPorCategoria, crearProducto, desactivarProducto, editarProducto, obtenerListaProductos, obtenerProducto, borrarProducto } from "../controllers/productos.controllers";
import validarJWT from "../helpers/tokenVerificacion";
import { authAdmin } from "../helpers/validarPerfilAdministrador";


const router = Router();
router.route("/").post([validarJWT, authAdmin,validarProducto], crearProducto).get(obtenerListaProductos)
router.route("/:id").get(obtenerProducto).delete(validarJWT, authAdmin, borrarProducto).put([validarJWT, authAdmin, validarProducto], editarProducto)
router.route("/categoria/:categoria").get(consultaProductosPorCategoria)
router.route("/activar/:id").put([authAdmin, validarJWT], activarProducto)
router.route("/desactivar/:id").put([authAdmin, validarJWT], desactivarProducto)

export default router;