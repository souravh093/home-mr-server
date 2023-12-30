import { Router } from "express";
import {
  createCategory,
  deleteCategoryById,
  getAllCategories,
  getCategoryById,
} from "../Controller/CategoryController.js";

const router = Router();

router.post("/", createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.delete("/:id", deleteCategoryById);

export default router;
