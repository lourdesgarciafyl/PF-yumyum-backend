import { Router } from "express";
import {validarLogin, validarUsuario} from "../helpers/validarUsuario";
import {borrarUsuario, crearUsuario, editarUsuario, loginUsuario, obtenerListaUsuarios, obtenerUsuario} from "../controllers/usuarios.controllers";

const router = Router();
router.route("/").get(obtenerListaUsuarios)
router.route("/login").post(validarLogin,loginUsuario)
router.route("/nuevo").post(validarUsuario, crearUsuario)
router.route("/:id").delete(borrarUsuario).put(validarUsuario, editarUsuario).get(obtenerUsuario)
export default router;