import { Router } from "express";
import { createOrder } from "../Controller/OrderController.js";

const router = Router();

router.post("/", createOrder);

export default router;
