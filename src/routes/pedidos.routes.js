import { Router } from "express";
import validarPedido from "../helpers/validarPedido";
import { crearPedido, obtenerListaPedidos } from "../controllers/pedidos.controllers";

const router = Router();
router.route("/").post(validarPedido, crearPedido).get(obtenerListaPedidos)

export default router
