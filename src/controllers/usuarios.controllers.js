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
      mensaje: "El usuario no se creó",
    });
  }
};

export const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    let usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        mensaje: 'Email o password no válido - email',
      });
    }
    if(usuario.estado!=='Activo'){
      return res.status(400).json({
        mensaje: 'El usuario no se encuentra activo - estado',
      });
    }

    const passwordValido = bcrypt.compareSync(password, usuario.password); 
    if (!passwordValido) {
      return res.status(400).json({
        mensaje: 'Email o password no válido - password',
      });
    }
    res.status(200).json({
      mensaje: 'El usuario es correcto',
      nombreUsuario: usuario.nombreUsuario,
      _id: usuario._id,
      email: usuario.email,
      perfil: usuario.perfil,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Usuario o Password incorrecto',
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
};

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
};

export const registro = async (req, res) => {
  try {
    const { email, password } = req.body;
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({
        mensaje: "El email ya se encuentra registrado.",
      });
    }
    usuario = new Usuario(req.body);
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);
    usuario.perfil = "Cliente";
    usuario.estado = "Activo";
    await usuario.save();
    res.status(201).json({
      mensaje: "usuario creado",
      nombre: usuario.nombreUsuario,
      perfil: usuario.perfil,
      uid: usuario._id,
    });
  } catch (error){
    console.log(error);
    res.status(400).json({
      mensaje: "El usuario no pudo ser registrado.",
    });
  }
};