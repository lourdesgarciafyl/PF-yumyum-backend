import { Router } from "express";
import validarUsuario from "../helpers/validarUsuario";
import {crearUsuario} from "../controllers/usuarios.controllers";

const router = Router();
router.route("/nuevo").post(validarUsuario, crearUsuario)
export default router;