const UsuarioEntity = require("../../domain/entities/Usuario");
const UsuarioModel = require("../../infrastructure/database/models/UsuarioModel");

const registrarUsuario = async (datos) => {
  const nuevoUsuario = new UsuarioEntity(datos);
  const usuarioGuardado = new UsuarioModel(nuevoUsuario);
  await usuarioGuardado.save();
  return usuarioGuardado;
};

module.exports = registrarUsuario;
