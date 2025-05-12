import { Express } from "express";
import * as express from "express";
import * as swaggerUi from "swagger-ui-express";
import { Router } from "express";
import { swaggerSpec } from "../swagger";
import loanRoutes from "./routes/loanSimulator.routes";
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/api", loanRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
