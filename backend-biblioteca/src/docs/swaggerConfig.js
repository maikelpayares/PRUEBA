const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Usuarios - Biblioteca",
      version: "1.0.0",
      description: "Documentación de la API para registro y login de usuarios",
    },
    servers: [
      {
        url: "http://localhost:30001",
        description: "Servidor de desarrollo",
      },
    ],
  },
  apis: ["src/interfaces/routes/*.js", "../application/controllers/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
