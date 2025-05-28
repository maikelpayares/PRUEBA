const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  cedula: String,
  password: String,
});

const UsuarioModel = mongoose.model("Usuario", UsuarioSchema);
module.exports = UsuarioModel;
