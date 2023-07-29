import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarEstadoPedido = [
    check("estado")
        .notEmpty()
        .withMessage("El estado es un dato obligatorio")
        .isIn(["En proceso", "Entregado"])
        .withMessage("Debe elegir una opción válida"),

    (req, res, next) => {
        resultadoValidacion(req, res, next);
    }
];

export default validarEstadoPedido;
