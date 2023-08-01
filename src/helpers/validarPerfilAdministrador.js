export const authAdmin = (req, res, next) => {
    if (req.usuario.perfil !== 'Administrador') {
      const error = new Error('Acción no válida.');
      return res.status(401).json({ msg: error.message });
    }
    next();
};