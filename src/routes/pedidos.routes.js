import { Router } from "express";
import validarPedido from "../helpers/validarPedido";
import { crearPedido } from "../controllers/pedidos.controllers";
import validarJWT from "../helpers/tokenVerificacion";
import { validarPerfilCliente } from "../helpers/authPerfil";

const router = Router();
router.route("/").post([validarJWT, validarPerfilCliente, validarPedido], crearPedido)

export default router
