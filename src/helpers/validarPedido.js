import resultadoValidacion from "./resultadoValidacion";
import { check } from "express-validator";

const validarPedido = [
    check("usuario")
    .notEmpty()
    .withMessage("El usuario es un dato obligatorio"),
    check("fechaPedido")
    .notEmpty()
    .withMessage("La fecha es un dato obligatorio."),
    check("productos")
    .notEmpty()
    .withMessage("Debe ingresar productos al pedido.")
    .isArray(),
    check("productos.*.producto")
    .notEmpty()
    .withMessage("Debe incluir al menos un producto en el pedido."),
    check("productos.*.cantidad")
    .notEmpty()
    .withMessage("La cantidad es un dato obligatorio.")
    .isNumeric()
    .custom((value) => {
        if(value >= 1 && value <= 10){
            return true;
        } else {
            throw new Error("La cantidad máxima de productos es 10.")
        }
    }),
    check("productos.*.subtotalItem")
    .notEmpty()
    .withMessage("El subtotal es un dato obligatorio.")
    .isNumeric()
    .custom((value) => {
        if(value >= 100 && value <= 100000){
            return true;
        } else {
            throw new Error("El subtotal debe estar entre $100 y $100000")
        }
    }),
    check("estado")
    .notEmpty()
    .withMessage("El estado es un dato obligatorio")
    .isIn(["En proceso","Entregado"])
    .withMessage("Debe elegir una opción válida"),
    check("precioTotal")
    .notEmpty()
    .withMessage("El precio total es un dato obligatorio")
    .isNumeric()
    .custom((value) => {
        if(value >= 100 && value <= 500000){
            return true;
        } else {
            throw new Error("El precio debe entre $100 y $500000")
        }
    }),
   
    (req, res, next) => {resultadoValidacion(req, res, next)}
]


export default validarPedido;
