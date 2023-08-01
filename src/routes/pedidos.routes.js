import { Router } from "express";
import validarPedido from "../helpers/validarPedido";
import { borrarPedido, crearPedido, entregarPedido, obtenerListaPedidos, obtenerPedido, pedidoEnProceso } from "../controllers/pedidos.controllers";
import validarJWT from "../helpers/tokenVerificacion";

const router = Router();
router.route("/").post(validarPedido, crearPedido).get(validarJWT,obtenerListaPedidos)
router.route("/:id").get(validarJWT,obtenerPedido).delete(validarJWT,borrarPedido)
router.route("/enproceso/:id").put(validarJWT,pedidoEnProceso)
router.route("/entregado/:id").put(validarJWT,entregarPedido)

export default router