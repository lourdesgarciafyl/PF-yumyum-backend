import { Router } from "express";
import validarProducto from "../helpers/validarProducto";
import {crearProducto, editarProducto, obtenerListaProductos } from "../controllers/productos.controllers";

const router = Router();
router.route("/").post(validarProducto, crearProducto).get(obtenerListaProductos)
router.route("/:id").put(editarProducto)

export default router;