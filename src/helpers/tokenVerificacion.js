import jwt from 'jsonwebtoken';

const validarJWT = (req, res, next) => {
  //recibir el token
  const token = req.header('x-token');
  if (!token) {
    //401 error en la autenticacion
    return res.status(401).json({
      mensaje: 'No hay token en la peticion',
    });
  }
  // si el token existe
  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    console.log(payload);
    req.usuario = payload.usuario;
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      mensaje: 'El token no es valido',
    });
  }
  next();
};

export default validarJWT;