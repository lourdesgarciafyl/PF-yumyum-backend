import { Router } from "express";
import {validarLogin, validarUsuario} from "../helpers/validarUsuario";
import {borrarUsuario, crearUsuario, editarUsuario, loginUsuario, obtenerListaUsuarios, obtenerUsuario} from "../controllers/usuarios.controllers";
import validarJWT from "../helpers/tokenVerificacion";

const router = Router();
router.route("/").get(validarJWT,obtenerListaUsuarios)
router.route("/login").post(validarLogin,loginUsuario)
router.route("/nuevo").post(validarUsuario, crearUsuario)
router.route("/:id").delete(validarJWT,borrarUsuario).put([validarJWT, validarUsuario], editarUsuario).get(validarJWT, obtenerUsuario)
export default router;