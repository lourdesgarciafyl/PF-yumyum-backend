import { Router } from "express";
import validarPedido from "../helpers/validarPedido";
import { crearPedido } from "../controllers/pedidos.controllers";
import validarJWT from "../helpers/tokenVerificacion";

const router = Router();
router.route("/").post([validarJWT, validarPedido], crearPedido)

export default router
