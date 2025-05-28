const usuarioRoutes = require("./interfaces/routes/usuarioRoutes");
const libroRoutes = require("./interfaces/routes/libroRoutes");
const connectDB = require("./infrastructure/database/mongoConnection");
const express = require("express");
const cors = require("cors");

const swaggerSpec = require("./docs/swaggerConfig");
const swaggerUi = require("swagger-ui-express");

const app = express();
const PORT = 30001;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

// Rutas de la API
app.use("/", usuarioRoutes);
app.use("/api/libros", libroRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
