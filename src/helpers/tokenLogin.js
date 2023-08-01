import jwt from 'jsonwebtoken';

const generarJWT = (usuario) => {
  return new Promise((resolve, reject) => {
    const payload = { usuario };
    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      {
        expiresIn: '4h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('No se pudo generar el token');
        }
        resolve(token);
      }
    );
  });
};

export default generarJWT;