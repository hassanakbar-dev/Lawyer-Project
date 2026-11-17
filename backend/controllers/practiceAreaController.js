import pool from "../config/db.js";

// @desc    Get all practice areas
// @route   GET /api/practice-areas
export async function getAllPracticeAreas(req, res, next) {
  try {
    const [rows] = await pool.query("SELECT * FROM practice_areas ORDER BY id ASC");
    return res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
}

// @desc    Get single practice area by ID
// @route   GET /api/practice-areas/:id
export async function getPracticeAreaById(req, res, next) {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM practice_areas WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Practice area not found with ID ${id}`,
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
