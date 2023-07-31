import resultadoValidacion from "./resultadoValidacion";
import { check } from "express-validator";

const validarEstadoProducto = [
    check(`estado`)
    .notEmpty()
    .withMessage("El estado es un dato obligatorio")
    .isIn(["Activo","Inactivo"])
    .withMessage("Debe elegir una opción válida"),

    (req, res, next) => {resultadoValidacion(req, res, next)}
]

export default validarEstadoProducto;