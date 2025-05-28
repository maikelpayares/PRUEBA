const express = require("express");
const router = express.Router();
const libroController = require("../../application/controllers/libroController");

/**
 * @swagger
 * tags:
 *   name: Libros
 *   description: Operaciones CRUD sobre libros
 */

/**
 * @swagger
 * /api/libros:
 *   post:
 *     summary: Crear un nuevo libro
 *     tags: [Libros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *               - category
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               category:
 *                 type: string
 *                 enum: [ficcion, aventura, romance, historia, geografia]
 *     responses:
 *       201:
 *         description: Libro creado correctamente
 */
router.post("/", libroController.crearLibro);

/**
 * @swagger
 * /api/libros:
 *   get:
 *     summary: Obtener todos los libros
 *     tags: [Libros]
 *     responses:
 *       200:
 *         description: Lista de libros
 */
router.get("/", libroController.obtenerLibros);

/**
 * @swagger
 * /api/libros/{id}:
 *   get:
 *     summary: Obtener un libro por ID
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del libro
 *     responses:
 *       200:
 *         description: Datos del libro
 *       404:
 *         description: Libro no encontrado
 */
router.get("/:id", libroController.obtenerLibro);

/**
 * @swagger
 * /api/libros/{id}:
 *   put:
 *     summary: Actualizar un libro por ID
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del libro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               category:
 *                 type: string
 *                 enum: [ficcion, aventura, romance, historia, geografia]
 *               available:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Libro actualizado
 *       404:
 *         description: Libro no encontrado
 */
router.put("/:id", libroController.actualizarLibro);

/**
 * @swagger
 * /api/libros/{id}:
 *   delete:
 *     summary: Eliminar un libro por ID
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del libro
 *     responses:
 *       200:
 *         description: Libro eliminado correctamente
 *       404:
 *         description: Libro no encontrado
 */
router.delete("/:id", libroController.eliminarLibro);

module.exports = router;
