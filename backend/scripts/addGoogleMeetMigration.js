import pool from "../config/db.js";

async function migrate() {
  console.log("Migrating consultations table for Google Meet integration...");
  
  // Check if columns exist
  const [cols] = await pool.query("DESCRIBE consultations");
  const colNames = cols.map((c) => c.Field);

  if (!colNames.includes("consultation_mode")) {
    await pool.query(
      "ALTER TABLE consultations ADD COLUMN consultation_mode ENUM('google_meet', 'in_person', 'phone') DEFAULT 'google_meet' AFTER practice_area"
    );
  }

  if (!colNames.includes("preferred_date")) {
    await pool.query(
      "ALTER TABLE consultations ADD COLUMN preferred_date VARCHAR(50) NULL AFTER consultation_mode"
    );
  }

  if (!colNames.includes("preferred_time")) {
    await pool.query(
      "ALTER TABLE consultations ADD COLUMN preferred_time VARCHAR(50) NULL AFTER preferred_date"
    );
  }

  if (!colNames.includes("meeting_link")) {
    await pool.query(
      "ALTER TABLE consultations ADD COLUMN meeting_link VARCHAR(500) NULL AFTER preferred_time"
    );
  }

  const [newCols] = await pool.query("DESCRIBE consultations");
  console.log("✓ Migration complete! Current columns:", newCols.map((c) => c.Field));
}

migrate()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Migration error:", err.message);
    process.exit(1);
  });
