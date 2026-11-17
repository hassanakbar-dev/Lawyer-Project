# Apex Legal Law Firm - Backend API

Robust RESTful API built with **Node.js**, **Express.js**, and **MySQL (XAMPP)**.

---

## 🛠️ Tech Stack
- **Runtime:** Node.js (v20+)
- **Framework:** Express.js (v5)
- **Database:** MySQL (via XAMPP / MariaDB)
- **Driver:** `mysql2/promise` (connection pooling & prepared statements)
- **Environment Management:** `dotenv`
- **CORS:** `cors`

---

## 📋 Database Configuration (XAMPP)

1. Open your **XAMPP Control Panel**.
2. Click **Start** next to **MySQL** (and optionally **Apache** if using phpMyAdmin).
3. The database `lawyer_db` and all required tables (`consultations`, `practice_areas`, `attorneys`) will be **automatically created and seeded** when you start the server!

Default settings in `.env`:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=lawyer_db
DB_PORT=3306
```

---

## 🚀 How to Run the Backend

```bash
cd backend

# Development mode with hot-reloading (nodemon):
npm run dev

# Or standard production mode:
npm start
```

Server starts at: `http://localhost:5000`

---

## 📡 API Endpoints

### Health Check
- `GET /api/health` — Returns server uptime and MySQL connection status.

### Consultation Intake (Forms & Cases)
- `POST /api/consultations` — Submit a new client consultation inquiry.
- `GET /api/consultations` — View all submitted inquiries (filter by `?status=pending`).
- `GET /api/consultations/:id` — View details of a specific inquiry.
- `PATCH /api/consultations/:id/status` — Update case status (`pending`, `reviewed`, `contacted`, `closed`).
- `DELETE /api/consultations/:id` — Delete an inquiry.

### Practice Areas
- `GET /api/practice-areas` — List all legal disciplines.
- `GET /api/practice-areas/:id` — Get specific practice area.

### Attorneys & Advocates
- `GET /api/attorneys` — List all senior partners and associates.
- `GET /api/attorneys/:id` — Get attorney profile.
