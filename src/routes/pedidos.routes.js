import { Router } from "express";
import validarPedido from "../helpers/validarPedido";
import { borrarPedido, crearPedido, entregarPedido, obtenerListaPedidos, obtenerPedido, pedidoEnProceso } from "../controllers/pedidos.controllers";
import validarJWT from "../helpers/tokenVerificacion";
import { authAdmin } from "../helpers/validarPerfilAdministrador";

const router = Router();
router.route("/").post(validarPedido, authAdmin, crearPedido).get(validarJWT, authAdmin, obtenerListaPedidos)
router.route("/:id").get(validarJWT,authAdmin,obtenerPedido).delete(validarJWT,authAdmin,borrarPedido)
router.route("/enproceso/:id").put(validarJWT,authAdmin,pedidoEnProceso)
router.route("/entregado/:id").put(validarJWT,authAdmin,entregarPedido)

export default router