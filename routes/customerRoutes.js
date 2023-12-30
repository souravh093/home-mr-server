import { Router } from "express";
import {
  createCustomer,
  getAllCustomers,
} from "../Controller/CustomerController.js";

const router = Router();

router.post("/", createCustomer);
router.get("/", getAllCustomers);

export default router;
