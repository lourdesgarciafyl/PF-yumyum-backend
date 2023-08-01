import { Router } from "express";
import {validarLogin, validarRegistro, validarUsuario} from "../helpers/validarUsuario";
import {borrarUsuario, cambiarPassword, crearUsuario, editarUsuario, loginUsuario, obtenerListaUsuarios, obtenerUsuario, registro} from "../controllers/usuarios.controllers";
import validarJWT from "../helpers/tokenVerificacion";

const router = Router();
router.route("/").get(validarJWT, obtenerListaUsuarios)
router.route("/registro").post(validarRegistro, registro)
router.route("/login").post(validarLogin,loginUsuario)
router.route("/nuevo").post([validarJWT, validarUsuario], crearUsuario)
router.route("/:id").delete(validarJWT, borrarUsuario).put(validarJWT, editarUsuario).get(validarJWT, obtenerUsuario)
router.route("/nuevopassword/:id").put(validarJWT, cambiarPassword)

export default router;