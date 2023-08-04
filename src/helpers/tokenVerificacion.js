import jwt from "jsonwebtoken";

const validarJWT = (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      mensaje: "No hay token en la peticion",
    });
  }
  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    req.usuario = payload.usuario;
  } catch (error) {
    return res.status(401).json({
      mensaje: "El token no es valido",
    });
  }
  next();
};

export default validarJWT;
