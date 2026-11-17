import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function runSetup() {
  console.log("Connecting to XAMPP MySQL...");
  
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    port: Number(process.env.DB_PORT) || 3306,
    multipleStatements: true,
  });

  console.log("Creating database 'lawyer_db'...");
  await connection.query("CREATE DATABASE IF NOT EXISTS `lawyer_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;");
  await connection.query("USE `lawyer_db`;");

  console.log("Creating tables...");
  await connection.query(`
    CREATE TABLE IF NOT EXISTS consultations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      practice_area VARCHAR(100) NOT NULL,
      urgency VARCHAR(50) DEFAULT 'Standard',
      summary TEXT NOT NULL,
      status ENUM('pending', 'reviewed', 'contacted', 'closed') DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS practice_areas (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      tag VARCHAR(100) NOT NULL,
      description TEXT NOT NULL,
      image_url VARCHAR(500),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS attorneys (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL,
      specialty VARCHAR(255) NOT NULL,
      education VARCHAR(255) NOT NULL,
      bar VARCHAR(255) NOT NULL,
      experience VARCHAR(100) NOT NULL,
      image_url VARCHAR(500),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  console.log("Seeding default data...");
  const [practiceRows] = await connection.query("SELECT COUNT(*) AS count FROM practice_areas;");
  if (practiceRows[0].count === 0) {
    const defaultAreas = [
      [
        "Corporate & Commercial Law",
        "Business Advisory",
        "Mergers & acquisitions, cross-border corporate governance, partnership dissolutions, and commercial negotiations.",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      ],
      [
        "Criminal Defense Litigation",
        "Trial Defense",
        "Relentless defense for high-profile white-collar offenses, government investigations, and courtroom trials.",
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      ],
      [
        "High-Net-Worth Family Law",
        "Private Client",
        "Discreet counsel for complex asset divisions, contested divorces, spousal support, and custody settlements.",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      ],
      [
        "Civil & Commercial Litigation",
        "Dispute Resolution",
        "Formidable courtroom advocacy for breach of contract, shareholder disputes, fraud claims, and arbitration.",
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
      ],
      [
        "Property & Real Estate Law",
        "Real Estate Counsel",
        "Commercial property transactions, zoning and land use, title disputes, and construction litigation.",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      ],
      [
        "Intellectual Property Protection",
        "IP Advocacy",
        "Aggressive defense and strategic registration of patent portfolios, trademarks, trade secrets, and copyright.",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      ],
    ];

    await connection.query(
      "INSERT INTO practice_areas (title, tag, description, image_url) VALUES ?",
      [defaultAreas]
    );
  }

  const [attorneyRows] = await connection.query("SELECT COUNT(*) AS count FROM attorneys;");
  if (attorneyRows[0].count === 0) {
    const defaultAttorneys = [
      [
        "Arthur Sterling, Esq.",
        "Managing Partner & Senior Trial Advocate",
        "High-Stakes Commercial Litigation & Corporate Defense",
        "Harvard Law School, J.D. (Magna Cum Laude)",
        "New York & Federal Bar Admission",
        "25+ Years Experience",
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      ],
      [
        "Victoria Hayes, Esq.",
        "Senior Partner - Criminal Defense & Appeals",
        "Federal Criminal Litigation & White-Collar Defense",
        "Columbia Law School, J.D.",
        "State & Supreme Court Bar Admission",
        "19+ Years Experience",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      ],
      [
        "Marcus Vance, Esq.",
        "Partner - Corporate Transactions & IP",
        "Cross-Border Mergers, IP Portfolios & Venture Law",
        "Yale Law School, LL.M.",
        "New York & International Arbitration Bar",
        "16+ Years Experience",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      ],
    ];

    await connection.query(
      "INSERT INTO attorneys (name, role, specialty, education, bar, experience, image_url) VALUES ?",
      [defaultAttorneys]
    );
  }

  const [dbs] = await connection.query("SHOW DATABASES LIKE 'lawyer_db';");
  const [tables] = await connection.query("SHOW TABLES FROM `lawyer_db`;");

  console.log("SUCCESS: Database and tables verified!");
  console.log("Database:", dbs);
  console.log("Tables in lawyer_db:", tables);

  await connection.end();
}

runSetup().catch((err) => {
  console.error("Setup Error:", err.message);
  process.exit(1);
});
