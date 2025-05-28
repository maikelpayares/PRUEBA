const UsuarioModel = require("../../infrastructure/database/models/UsuarioModel");

const loginUsuario = async (email, password) => {
  const usuario = await UsuarioModel.findOne({ email });
  if (!usuario) {
    throw new Error("Usuario no encontrado");
  }

  if (usuario.password !== password) {
    throw new Error("Contraseña incorrecta");
  }

  return usuario;
};

module.exports = loginUsuario;
