const Usuario = require("../../domain/models/Usuario");

const actualizarUsuario = async (id, datosActualizados) => {
  const usuario = await Usuario.findByIdAndUpdate(id, datosActualizados, {
    new: true,
  });
  return usuario;
};

module.exports = actualizarUsuario;
