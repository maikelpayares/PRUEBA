const Usuario = require("../../domain/models/Usuario");

const obtenerUsuarioPorId = async (id) => {
  const usuario = await Usuario.findById(id);
  return usuario;
};

module.exports = obtenerUsuarioPorId;
