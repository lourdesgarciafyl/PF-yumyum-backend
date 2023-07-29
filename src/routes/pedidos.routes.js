import { Router } from "express";
import validarPedido from "../helpers/validarPedido";
import { crearPedido, entregarPedido, obtenerListaPedidos, obtenerPedido, pedidoEnProceso } from "../controllers/pedidos.controllers";

const router = Router();
router.route("/").post(validarPedido, crearPedido).get(obtenerListaPedidos)
router.route("/:id").get(obtenerPedido)
router.route("/enproceso/:id").put(validarPedido, pedidoEnProceso)
router.route("/entregado/:id").put(validarPedido, entregarPedido)

export default router