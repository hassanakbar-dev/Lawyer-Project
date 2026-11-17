import { Router } from "express";
import {
  createConsultation,
  getAllConsultations,
  getConsultationById,
  updateConsultationStatus,
  deleteConsultation,
} from "../controllers/consultationController.js";

const router = Router();

router.route("/")
  .post(createConsultation)
  .get(getAllConsultations);

router.route("/:id")
  .get(getConsultationById)
  .delete(deleteConsultation);

router.patch("/:id/status", updateConsultationStatus);

export default router;
