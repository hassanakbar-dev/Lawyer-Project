import pool from "../config/db.js";

async function updateEnum() {
  await pool.query(
    "ALTER TABLE consultations MODIFY COLUMN consultation_mode ENUM('google_meet', 'in_person', 'phone', 'message') DEFAULT 'google_meet'"
  );
  console.log("✓ ENUM updated to include 'message' successfully!");
}

updateEnum()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error:", err.message);
    process.exit(1);
  });
