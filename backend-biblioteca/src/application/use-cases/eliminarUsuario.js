const Usuario = require("../../domain/models/Usuario");

const eliminarUsuario = async (id) => {
  await Usuario.findByIdAndDelete(id);
};

module.exports = eliminarUsuario;
