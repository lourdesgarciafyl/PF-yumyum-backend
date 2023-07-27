export const validarPerfilAdmin = (req, res, next) => {
    if (req.usuario.perfil !== 'Administrador') {
      const error = new Error('Acción no válida.');
      return res.status(401).json({ msg: error.message });
    }
    next();
};
  
export  const validarPerfilCliente = (req, res, next) => {
    if (req.usuario.perfil !== 'Cliente') {
      const error = new Error('Acción no válida.');
      return res.status(401).json({ msg: error.message });
    }
    next();
};  