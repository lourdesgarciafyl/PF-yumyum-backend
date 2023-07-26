import { Router } from "express";
import validarUsuario from "../helpers/validarUsuario";
import {borrarUsuario, crearUsuario} from "../controllers/usuarios.controllers";

const router = Router();
router.route("/nuevo").post(validarUsuario, crearUsuario)
router.route("/:id").delete(borrarUsuario)
export default router;