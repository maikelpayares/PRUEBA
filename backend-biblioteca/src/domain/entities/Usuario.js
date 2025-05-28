class Usuario {
  constructor({ nombre, email, cedula, password }) {
    this.nombre = nombre;
    this.email = email;
    this.cedula = cedula;
    this.password = password;
  }
}

module.exports = Usuario;
