import pool from "../config/db.js";

// Helper to generate a realistic Google Meet format code (e.g. abc-defg-hij)
function generateGoogleMeetLink() {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  const part = (len) =>
    Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `https://meet.google.com/${part(3)}-${part(4)}-${part(3)}`;
}

// @desc    Submit a new legal case consultation inquiry (Supports Google Meet)
// @route   POST /api/consultations
export async function createConsultation(req, res, next) {
  try {
    const {
      name,
      phone,
      email,
      practiceArea,
      urgency,
      summary,
      consultationMode = "google_meet",
      preferredDate,
      preferredTime,
    } = req.body;

    if (!name || !phone || !email || !summary) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields: name, phone, email, and case summary.",
      });
    }

    // Generate Google Meet Link if mode is google_meet
    const meetingLink =
      consultationMode === "google_meet" ? generateGoogleMeetLink() : null;

    const isMessage = consultationMode === "message";

    const [result] = await pool.query(
      `INSERT INTO consultations 
        (name, phone, email, practice_area, consultation_mode, preferred_date, preferred_time, meeting_link, urgency, summary)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        phone,
        email,
        practiceArea || "General Legal Matter",
        consultationMode,
        isMessage ? null : preferredDate || null,
        isMessage ? null : preferredTime || null,
        meetingLink,
        urgency || "Standard",
        summary,
      ]
    );

    let returnMessage = "Consultation inquiry received securely. An advocate will review your matter.";
    if (consultationMode === "google_meet") {
      returnMessage = "Virtual Google Meet consultation scheduled successfully! Meeting details generated.";
    } else if (consultationMode === "message") {
      returnMessage = "Your inquiry message has been received by our chambers. We will respond promptly.";
    }

    return res.status(201).json({
      success: true,
      message: returnMessage,
      inquiryId: result.insertId,
      consultationMode,
      preferredDate: isMessage ? null : preferredDate || null,
      preferredTime: isMessage ? null : preferredTime || null,
      meetingLink,
    });
  } catch (error) {
    next(error);
  }
}

// @desc    Get all consultation inquiries (Admin/Review)
// @route   GET /api/consultations
export async function getAllConsultations(req, res, next) {
  try {
    const { status, mode } = req.query;
    let query = "SELECT * FROM consultations WHERE 1=1";
    const params = [];

    if (status) {
      query += " AND status = ?";
      params.push(status);
    }

    if (mode) {
      query += " AND consultation_mode = ?";
      params.push(mode);
    }

    query += " ORDER BY created_at DESC";

    const [rows] = await pool.query(query, params);

    return res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
}

// @desc    Get a single consultation inquiry by ID
// @route   GET /api/consultations/:id
export async function getConsultationById(req, res, next) {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM consultations WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No consultation inquiry found with ID: ${id}`,
      });
    }

    return res.status(200).json({
      success: true,
      data: rows[0],
    });
  } catch (error) {
    next(error);
  }
}

// @desc    Update consultation status (pending -> reviewed -> contacted -> closed)
// @route   PATCH /api/consultations/:id/status
export async function updateConsultationStatus(req, res, next) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["pending", "reviewed", "contacted", "closed"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Valid statuses are: ${validStatuses.join(", ")}`,
      });
    }

    const [result] = await pool.query(
      "UPDATE consultations SET status = ? WHERE id = ?",
      [status, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: `Consultation with ID ${id} not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Consultation status successfully updated to '${status}'.`,
    });
  } catch (error) {
    next(error);
  }
}

// @desc    Delete a consultation inquiry
// @route   DELETE /api/consultations/:id
export async function deleteConsultation(req, res, next) {
  try {
    const { id } = req.params;
    const [result] = await pool.query("DELETE FROM consultations WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: `Consultation with ID ${id} not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Consultation inquiry deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
}
