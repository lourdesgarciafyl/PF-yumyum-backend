import Categoria from '../models/categoria';

export const crearCategoria = async (req, res) => {
  try {
    const categoriaNueva = new Categoria(req.body);
    await categoriaNueva.save();
    res.status(201).json({
      mensaje: 'La categoria fue creada correctamente',
    });
  } catch (error) {
    res.status(404).json({
      mensaje: 'Error. No se pudo crear la categoria',
    });
  }
};

export const obtenerListaCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(404).json({
      mensaje: 'Error. No se pudo obtener la lista de categorias',
    });
  }
};

export const obtenerListaCategoriasActivas = async (req, res) => {
  try {
    const categoriasActivas = await Categoria.find({ estado: 'Activo' });
    res.status(200).json(categoriasActivas);
  } catch (error) {
    res.status(404).json({
      mensaje:
        'Error. No se pudo obtener la lista de categorias en estado Activo.',
    });
  }
};
