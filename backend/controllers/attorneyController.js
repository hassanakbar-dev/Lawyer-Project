import pool from "../config/db.js";

// @desc    Get all attorneys
// @route   GET /api/attorneys
export async function getAllAttorneys(req, res, next) {
  try {
    const [rows] = await pool.query("SELECT * FROM attorneys ORDER BY id ASC");
    return res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
}

// @desc    Get attorney by ID
// @route   GET /api/attorneys/:id
export async function getAttorneyById(req, res, next) {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM attorneys WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Attorney not found with ID ${id}`,
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
