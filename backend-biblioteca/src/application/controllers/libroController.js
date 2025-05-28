const Libro = require("../../domain/models/Libro");

exports.crearLibro = async (req, res) => {
  try {
    const libro = new Libro(req.body);
    await libro.save();
    res.status(201).json(libro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerLibros = async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerLibro = async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarLibro = async (req, res) => {
  console.log("Actualizando libro con ID:", req.params.id);
  try {
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.json(libro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarLibro = async (req, res) => {
  try {
    const libro = await Libro.findByIdAndDelete(req.params.id);
    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
