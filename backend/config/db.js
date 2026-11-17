import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Create connection to ensure database exists
async function ensureDatabaseExists() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      port: Number(process.env.DB_PORT) || 3306,
    });

    const dbName = process.env.DB_NAME || "lawyer_db";
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
    await connection.end();
  } catch (error) {
    console.warn(
      "⚠️ Could not automatically create/check database. Make sure MySQL is started in XAMPP Control Panel.",
      error.message
    );
  }
}

await ensureDatabaseExists();

// Pool connected to lawyer_db
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "lawyer_db",
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
