const express = require("express");
const registrarUsuario = require("../../application/use-cases/registrarUsuario");
const loginUsuario = require("../../application/use-cases/loginUsuario");
const obtenerUsuarios = require("../../application/use-cases/obtenerUsuarios");
const obtenerUsuarioPorId = require("../../application/use-cases/obtenerUsuarioPorId");
const actualizarUsuario = require("../../application/use-cases/actualizarUsuario");
const eliminarUsuario = require("../../application/use-cases/eliminarUsuario");

const router = express.Router();

// Crear usuario
router.post("/registro", async (req, res) => {
  try {
    const usuario = await registrarUsuario(req.body);
    console.log("✅ Usuario registrado:", usuario);
    res.status(201).json({ mensaje: "Usuario registrado con éxito" });
  } catch (error) {
    console.error("❌ Error al registrar usuario:", error);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await loginUsuario(email, password);
    res.status(200).json({
      mensaje: "Login exitoso",
      usuario: { nombre: usuario.nombre, email: usuario.email },
    });
  } catch (error) {
    console.error("❌ Error en login:", error);
    res.status(401).json({ error: error.message });
  }
});

// Obtener todos los usuarios
router.get("/obtener", async (req, res) => {
  try {
    const usuarios = await obtenerUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("❌ Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

// Obtener usuario por ID
router.get("/:id", async (req, res) => {
  try {
    const usuario = await obtenerUsuarioPorId(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error("❌ Error al obtener usuario:", error);
    res.status(500).json({ error: "Error al obtener usuario" });
  }
});

// Actualizar usuario
router.put("/:id", async (req, res) => {
  try {
    const usuarioActualizado = await actualizarUsuario(req.params.id, req.body);
    res
      .status(200)
      .json({ mensaje: "Usuario actualizado", usuario: usuarioActualizado });
  } catch (error) {
    console.error("❌ Error al actualizar usuario:", error);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
});

// Eliminar usuario
router.delete("/:id", async (req, res) => {
  try {
    await eliminarUsuario(req.params.id);
    res.status(200).json({ mensaje: "Usuario eliminado con éxito" });
  } catch (error) {
    console.error("❌ Error al eliminar usuario:", error);
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
});

module.exports = router;

/**
 * @swagger
 * /registro:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - email
 *               - cedula
 *               - password
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *               cedula:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado con éxito
 *       500:
 *         description: Error al registrar usuario
 *
 * /login:
 *   post:
 *     summary: Iniciar sesión con email y contraseña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso
 *       401:
 *         description: Credenciales inválidas
 *
 * /obtener:
 *   get:
 *     summary: Obtener todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *       500:
 *         description: Error al obtener usuarios
 *
 * /{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del usuario
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error al obtener usuario
 *
 *   put:
 *     summary: Actualizar un usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *               cedula:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *       500:
 *         description: Error al actualizar usuario
 *
 *   delete:
 *     summary: Eliminar un usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado con éxito
 *       500:
 *         description: Error al eliminar usuario
 */
