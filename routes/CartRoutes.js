import { Router } from "express";
import {
  createCart,
  deleteGigFromCart,
  getAllGigsInCart,
  getSelectedCartGigs,
  updateCartIsSelected,
} from "../Controller/CartController.js";

const router = Router();

router.post("/", createCart);
router.get("/", getAllGigsInCart);
router.get("/selected/:email", getSelectedCartGigs);
router.delete("/:id", deleteGigFromCart);
router.put("/:id", updateCartIsSelected);

export default router;
