const swaggerJSDoc = require("swagger-jsdoc");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ImmoGuide API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.ts", "./src/interfaces/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);
