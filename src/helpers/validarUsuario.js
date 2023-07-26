import resultadoValidacion from "./resultadoValidacion";
import { check } from "express-validator";

const validarUsuario = [
  check(`nombreUsuario`)
    .notEmpty()
    .withMessage("El nombre del usuario es obligatorio")
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage("El nombre del usuario debe contener entre 3 y 50 caracteres"),

  check(`apellidoUsuario`)
    .notEmpty()
    .withMessage("El Apellido  del usuario es obligatorio")
    .isString()
    .isLength({ min: 5, max: 40 })
    .withMessage(
      "El apellido del usuario debe contener entre 5 y 40 caracteres"
    ),

  check(`email`)
    .notEmpty()
    .withMessage("El e-mail es un dato obligatorio")
    .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)
    .withMessage("El e-mail debe cumplir con el formato juan@correo.com")
    .isLength({ min: 8, max: 60 })
    .withMessage("El e-mail debe contener entre 8 y 60 caracteres"),

  check(`password`)
    .notEmpty()
    .withMessage("El password es obligatorio")
    .isString()
    .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
    .withMessage(
      "La contraseña debe tener entre 8 y 16 caracteres, al menos un número, una minúscula, una mayúscula y no contener caracteres especiales."
    )
    .isLength({ min: 5, max: 60 })
    .withMessage("El password debe contener entre 8 y 16 caracteres"),

  check(`estado`)
    .notEmpty()
    .withMessage("El estado es un dato obligatorio")
    .isIn(["Activo", "Inactivo"])
    .withMessage("Debe elegir una opción válida"),

  check(`perfil`)
    .notEmpty()
    .withMessage("El perfil del usuario es un dato obligatorio")
    .isIn(["Administrador", "Cliente"])
    .withMessage("Debe elegir una opción válida"),

  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarUsuario;
