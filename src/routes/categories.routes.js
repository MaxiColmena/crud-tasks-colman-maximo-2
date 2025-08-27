import { Router } from "express";
import {createNewCategory, getAllCategories, getCategoryById} from "../controllers/categories.controllers.js";

export const categoriesRouter = Router();

categoriesRouter.post("/categories", createNewCategory);
categoriesRouter.get("/categories", getAllCategories);
categoriesRouter.get("/categories/:id", getCategoryById);

