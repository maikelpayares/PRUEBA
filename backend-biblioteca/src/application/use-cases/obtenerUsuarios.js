const Usuario = require("../../domain/models/Usuario.js");

const obtenerUsuarios = async () => {
  const usuarios = await Usuario.find(); // O el método que uses en tu ORM
  return usuarios;
};

module.exports = obtenerUsuarios;
