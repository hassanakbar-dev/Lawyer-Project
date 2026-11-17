import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import consultationRoutes from "./routes/consultationRoutes.js";
import practiceAreaRoutes from "./routes/practiceAreaRoutes.js";
import attorneyRoutes from "./routes/attorneyRoutes.js";
import { initializeDatabase } from "./config/initDb.js";
import pool from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      process.env.FRONTEND_URL || "*",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root & Health Check Endpoint
app.get("/api/health", async (req, res) => {
  let dbStatus = "disconnected";
  try {
    const [result] = await pool.query("SELECT 1 AS ok");
    if (result[0].ok === 1) {
      dbStatus = "connected";
    }
  } catch (err) {
    dbStatus = `disconnected (${err.message})`;
  }

  res.status(200).json({
    status: "online",
    service: "Apex Legal Backend API",
    database: dbStatus,
    timestamp: new Date().toISOString(),
  });
});

// Mount Routes
app.use("/api/consultations", consultationRoutes);
app.use("/api/practice-areas", practiceAreaRoutes);
app.use("/api/attorneys", attorneyRoutes);

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start Server and Initialize Database
app.listen(PORT, async () => {
  console.log(`=================================================`);
  console.log(`🚀 Apex Legal Backend Server is running on port ${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`=================================================`);

  // Initialize DB tables and seed data
  await initializeDatabase();
});
