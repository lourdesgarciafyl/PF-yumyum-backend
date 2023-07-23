import resultadoValidacion from "./resultadoValidacion";
import { check } from "express-validator";

const validarProducto = [
    check(`nombreProducto`)
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isString()
    .isLength({min: 3, max:50})
    .withMessage("El nombre del producto debe contener entre 3 y 50 caracteres"),
    check(`precio`)
    .notEmpty()
    .withMessage("El preico del producto es obligatorio")
    .isNumeric()
    .withMessage("Debe ingresar un valor numerico")
    .custom((value) =>{
        if(value >= 100 && value <= 10000){
            return true;
        }else{
            throw new Error("El precio debe entre $100 y $10000")
        }
    }),
    check(`imagen`)
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:png|jpe?g|gif|svg)$/)
    .withMessage("Debe ingresar un link terminado en jpg, jpeg, gif o png"),
    check(`detalle`)
    .notEmpty()
    .withMessage("El detalle del producto es obligatorio")
    .isString()
    .isLength({min: 5, max:500})
    .withMessage("El detalle del producto debe contener entre 5 y 500 caracteres"),
    check(`estado`)
    .notEmpty()
    .withMessage("El estado es una dato obligatorio")
    .isIn(["Activo","Inactivo"])
    .withMessage("El estado debe ser una opción válida"),
    check(`categoria`),

    (req, res, netx) => {resultadoValidacion(req, res, netx)}
]

export default validarProducto;