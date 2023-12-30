import { Router } from "express";
import AdminUserRoutes from "./adminUserRoutes.js";
import CategoryRoutes from "./categoryRoutes.js";
import GigsRoutes from "./gigsRoutes.js";
import CustomerRoutes from "./customerRoutes.js";
import ContactRoutes from "./contactRoutes.js";
import OrderRoutes from "./orderRoutes.js";
import CartRoutes from "./CartRoutes.js";

const router = Router();

router.use("/api/adminUsers", AdminUserRoutes);
router.use("/api/categories", CategoryRoutes);
router.use("/api/gigs", GigsRoutes);
router.use("/api/customer", CustomerRoutes);
router.use("/api/contact", ContactRoutes);
router.use("/api/orders", OrderRoutes);
router.use("/api/carts", CartRoutes);

export default router;
