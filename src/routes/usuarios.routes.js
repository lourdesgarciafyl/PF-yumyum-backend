import { Router } from "express";
import {validarLogin, validarRegistro, validarUsuario} from "../helpers/validarUsuario";
import {borrarUsuario, crearUsuario, editarUsuario, loginUsuario, obtenerListaUsuarios, obtenerUsuario, registro} from "../controllers/usuarios.controllers";
import validarJWT from "../helpers/tokenVerificacion";
import { authAdmin } from "../helpers/validarPerfilAdministrador";

const router = Router();
router.route("/").get([validarJWT, authAdmin], obtenerListaUsuarios)
router.route("/registro").post(validarRegistro, registro)
router.route("/login").post(validarLogin,loginUsuario)
router.route("/nuevo").post([validarJWT,authAdmin, validarUsuario], crearUsuario)
router.route("/:id").delete(validarJWT, authAdmin, borrarUsuario).put(validarJWT, authAdmin, editarUsuario).get(validarJWT, authAdmin, obtenerUsuario)
export default router;