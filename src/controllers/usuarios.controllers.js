import Usuario from "../models/usuario";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    //verificar si el email ya existe
    let usuario = await Usuario.findOne({ email }); //devulve un null
    console.log(usuario);
    if (usuario) {
      //si el usuario existe
      return res.status(400).json({
        mensaje: "ya existe un usuario con el correo enviado",
      });
    }
    //guardamos el nuevo usuario en la BD
    usuario = new Usuario(req.body);
    //encriptar el password
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();
    res.status(201).json({
      mensaje: "usuario creado",
      nombre: usuario.nombreUsuario,
      uid: usuario._id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El usuario no pudo ser creado",
    });
  }
};

export const borrarUsuario = async (req, res) => {
  try {
    // Aqui verificamos si el usuario existe en la BD
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({
        mensaje: "El usuario no fue encontrado.",
      });
    } // Borramos el usuario de la BD
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Usuario eliminado exitosamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "No se pudo eliminar el usuario.",
    });
  }
};

export const editarUsuario = async (req, res) => {
  try {
    const { email, password, nombreUsuario } = req.body;

    // Verificar si el usuario existe en la BD
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({
        mensaje: "El usuario no fue encontrado.",
      });
    }

    // Si existe el usuario entonces ahi actualizamos sus datos
    usuario.email = email;
    usuario.nombreUsuario = nombreUsuario;

    // Si cambio la contraseña la encriptamos y actualizamos
    if (password) {
      const salt = bcrypt.genSaltSync(10);
      usuario.password = bcrypt.hashSync(password, salt);
    }

    // Guardamos los cambios en la BD
    await usuario.save();

    res.status(200).json({
      mensaje: "Usuario actualizado exitosamente."
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "No se pudo actualizar el usuario correctamente."
    });
  }
};

export const obtenerListaUsuarios = async (req, res) =>{
  try {
      const usuarios = await Usuario.find();
      res.status(200).json(usuarios);
  } catch (error) {
      console.log(error)
      res.status(404).json({
          mensaje: "Error. No se pudo obtener la lista de usuarios"
      })
  }
}

export const obtenerUsuario = async (req, res) => {
  try{
      const usuario = await Usuario.findById(req.params.id);
      res.status(200).json(usuario);
  }catch(error){
      console.log(error)
      res.status(404).json({
          mensaje: "Error. No se pudo obtener el usuario"
      })
  }
}