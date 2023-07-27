import { Router } from "express";
import validarPedido from "../helpers/validarPedido";
import { crearPedido, obtenerListaPedidos, obtenerPedido } from "../controllers/pedidos.controllers";

const router = Router();
router.route("/").post(validarPedido, crearPedido).get(obtenerListaPedidos)
router.route("/:id").get(obtenerPedido)

export default router
