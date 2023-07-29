import { Router } from "express";
import validarPedido from "../helpers/validarPedido";
import { crearPedido, entregarPedido, obtenerListaPedidos, obtenerPedido, pedidoEnProceso } from "../controllers/pedidos.controllers";
import validarEstadoPedido from "../helpers/validarEstadoPedido";

const router = Router();
router.route("/").post(validarPedido, crearPedido).get(obtenerListaPedidos)
router.route("/:id").get(obtenerPedido)
router.route("/enproceso/:id").put(validarEstadoPedido, pedidoEnProceso)
router.route("/entregado/:id").put(validarEstadoPedido, entregarPedido)

export default router