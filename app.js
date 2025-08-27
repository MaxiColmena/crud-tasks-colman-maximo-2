import express from "express";
import dotenv from "dotenv";
import { routerUser } from "./src/routes/user.routes.js";
import { routerTask } from "./src/routes/task.routes.js";
import { categoriesRouter } from "./src/routes/categories.routes.js";
import { taskCategoriesRouter } from "./src/routes/task_categories.routes.js";
import { addressRouter } from "./src/routes/address.routes.js";
import { startDB } from "./src/config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", routerUser);
app.use("/api", routerTask);
app.use("/api", categoriesRouter);
app.use("/api", taskCategoriesRouter);
app.use("/api", addressRouter);

app.listen(PORT, async () => {
  await startDB();
  console.log("Servidor corriendo en el puerto: ", PORT);
});
