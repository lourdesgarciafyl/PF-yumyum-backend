import { Router } from 'express';
import { crearCategoria } from '../controllers/categorias.controllers';
const router = Router();
router.route('/').post(crearCategoria);

export default router;
