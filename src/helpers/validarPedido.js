import resultadoValidacion from "./resultadoValidacion";
import { check } from "express-validator";

const validarPedido = [
    check("usuario")
    .notEmpty()
    .withMessage("El usuario es un dato obligatorio")
    .isString(),
    check("fechaPedido")
    .notEmpty()
    .withMessage("La fecha es un dato obligatorio.")
    .isDate({format:'DD-MM-YYYY'}),
    check("productos")
    .notEmpty()
    .withMessage("Debe ingresar productos al pedido.")
    .isArray(),
    check("estado")
    .notEmpty()
    .withMessage("El estado es un dato obligatorio")
    .isIn(["En proceso","Entregado"])
    .withMessage("Debe elegir una opción válida"),
    check("precioTotal")
    .notEmpty()
    .withMessage("El precio total es un dato obligatorio")
    .custom((value) => {
        if(value >= 100 && value <= 500000){
            return true;
        } else {
            throw new Error("El precio debe entre $100 y $10000")
        }
    }),
   
    (req, res, next) => {resultadoValidacion(req, res, next)}
]

export default validarPedido;