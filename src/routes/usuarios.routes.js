import { Router } from "express";
import {validarLogin, validarUsuario} from "../helpers/validarUsuario";
import {borrarUsuario, crearUsuario, editarUsuario, loginUsuario, obtenerListaUsuarios, obtenerUsuario} from "../controllers/usuarios.controllers";
import validarJWT from "../helpers/tokenVerificacion";

const router = Router();
router.route("/").get([validarJWT, validarPerfilAdmin],obtenerListaUsuarios)
router.route("/login").post(validarLogin,loginUsuario)
router.route("/nuevo").post([validarJWT, validarPerfilAdmin, validarUsuario], crearUsuario)
router.route("/:id").delete([validarJWT, validarPerfilAdmin],borrarUsuario).put([validarJWT, validarPerfilAdmin, validarUsuario], editarUsuario).get(validarJWT, obtenerUsuario)
export default router;