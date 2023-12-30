import { Router } from "express";
import {
  createAdminUser,
  deleteAdminUserById,
  getAdminUserByEmail,
  getAdminUserById,
  getAllAdminUsers,
  updateAdminUserByEmail,
} from "../Controller/AdminUserController.js";

const router = Router();

router.post("/", createAdminUser);
router.get("/all", getAllAdminUsers);
router.get("/:email", getAdminUserByEmail);
router.get("/:id", getAdminUserById);
router.delete("/:id", deleteAdminUserById);
router.put("/:email", updateAdminUserByEmail);

export default router;
