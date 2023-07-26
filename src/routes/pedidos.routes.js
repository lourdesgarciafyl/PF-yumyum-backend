import { Router } from "express";
import validarPedido from "../helpers/validarPedido";
import { crearPedido } from "../controllers/pedidos.controllers";

const router = Router();
router.route("/").post(validarPedido, crearPedido)

export default router
