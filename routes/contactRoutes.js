import { Router } from "express";
import { createContact } from "../Controller/ContactController.js";

const router = Router()

router.post("/", createContact)

export default router;