import { Router } from "express";
import {
  getAllPracticeAreas,
  getPracticeAreaById,
} from "../controllers/practiceAreaController.js";

const router = Router();

router.get("/", getAllPracticeAreas);
router.get("/:id", getPracticeAreaById);

export default router;
