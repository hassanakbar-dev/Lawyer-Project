import { Router } from "express";
import {
  getAllAttorneys,
  getAttorneyById,
} from "../controllers/attorneyController.js";

const router = Router();

router.get("/", getAllAttorneys);
router.get("/:id", getAttorneyById);

export default router;
