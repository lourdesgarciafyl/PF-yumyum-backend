import { Router } from 'express';
import { crearCategoria, obtenerListaCategorias, obtenerListaCategoriasActivas } from '../controllers/categorias.controllers';
import validarCategoria from '../helpers/validarCategoria';
import validarJWT from '../helpers/tokenVerificacion';
const router = Router();
router.route('/').post([validarJWT,validarCategoria],crearCategoria).get(obtenerListaCategorias);
router.route('/activas').get(obtenerListaCategoriasActivas);

export default router;
