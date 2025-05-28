const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    cedula: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Usuario =
  mongoose.models.Usuario || mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;
