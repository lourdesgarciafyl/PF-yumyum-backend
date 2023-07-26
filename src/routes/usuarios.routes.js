import { Router } from "express";
import validarUsuario from "../helpers/validarUsuario";
import {borrarUsuario, crearUsuario, editarUsuario} from "../controllers/usuarios.controllers";

const router = Router();
router.route("/nuevo").post(validarUsuario, crearUsuario)
router.route("/:id").delete(borrarUsuario).put(validarUsuario, editarUsuario)
export default router;