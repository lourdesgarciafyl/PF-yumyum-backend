import { Router } from "express";
import validarPedido from "../helpers/validarPedido";
import { crearPedido, obtenerListaPedidos, obtenerPedido, borrarPedido } from "../controllers/pedidos.controllers";

const router = Router();
router.route("/").post(validarPedido, crearPedido).get(obtenerListaPedidos)
router.route("/:id").get(obtenerPedido).delete(borrarPedido)

export default router
