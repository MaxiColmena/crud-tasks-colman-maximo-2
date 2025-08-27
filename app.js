import express from "express";
import dotenv from "dotenv";
import { routerUser } from "./src/routes/user.routes.js";
import { routerTask } from "./src/routes/task.routes.js";
import { startDB } from "./src/config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", routerUser);
app.use("/api", routerTask);

app.listen(PORT, async () => {
  await startDB();
  console.log("Servidor corriendo en el puerto: ", PORT);
});