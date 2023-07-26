import Categoria from '../models/categoria';

export const crearCategoria = async (req, res) => {
  try {
    const categoriaNueva = new Categoria(req.body);
    await categoriaNueva.save();
    res.status(201).json({
      mensaje: 'La categoria fue creada correctamente',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error. No se pudo crear la categoria',
    });
  }
};
