import { Router } from 'express';
import { crearCategoria } from '../controllers/categorias.controllers';
import validarCategoria from '../helpers/validarCategoria';
const router = Router();
router.route('/').post(validarCategoria,crearCategoria);

export default router;
