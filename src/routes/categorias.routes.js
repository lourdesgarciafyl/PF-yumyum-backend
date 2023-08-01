import { Router } from 'express';
import { crearCategoria, obtenerListaCategorias, obtenerListaCategoriasActivas } from '../controllers/categorias.controllers';
import validarCategoria from '../helpers/validarCategoria';
import validarJWT from '../helpers/tokenVerificacion';
import { authAdmin } from '../helpers/validarPerfilAdministrador';
const router = Router();
router.route('/').post([validarJWT,authAdmin,validarCategoria],crearCategoria).get(obtenerListaCategorias);
router.route('/activas').get(obtenerListaCategoriasActivas);

export default router;
