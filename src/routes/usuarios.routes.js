import { Router } from "express";
import {validarLogin, validarRegistro, validarUsuario} from "../helpers/validarUsuario";
import {borrarUsuario, crearUsuario, editarUsuario, loginUsuario, obtenerListaUsuarios, obtenerUsuario, registro} from "../controllers/usuarios.controllers";

const router = Router();
router.route("/").get(obtenerListaUsuarios).post(validarRegistro, registro)
router.route("/login").post(validarLogin,loginUsuario)
router.route("/nuevo").post(validarUsuario, crearUsuario)
router.route("/:id").delete(borrarUsuario).put(validarUsuario, editarUsuario).get(obtenerUsuario)
export default router;