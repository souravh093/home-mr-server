import { Router } from "express";
import {
  createGig,
  deleteGigById,
  getAllGigs,
  getGigById,
  updateGigById,
} from "../Controller/GigController.js";

const router = Router();

router.post("/", createGig);
router.get("/", getAllGigs);
router.get("/:id", getGigById);
router.put("/:id", updateGigById);
router.delete("/:id", deleteGigById);

export default router;
