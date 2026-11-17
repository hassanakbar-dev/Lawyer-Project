-- Apex Legal Law Firm Database Schema (With Google Meet Integration)
-- Host: localhost (XAMPP MySQL)
-- Database: lawyer_db

CREATE DATABASE IF NOT EXISTS `lawyer_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `lawyer_db`;

-- 1. Consultations Table (With Google Meet & Meeting Schedule)
CREATE TABLE IF NOT EXISTS `consultations` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `practice_area` VARCHAR(100) NOT NULL,
  `consultation_mode` ENUM('google_meet', 'in_person', 'phone', 'message') DEFAULT 'google_meet',
  `preferred_date` VARCHAR(50) NULL,
  `preferred_time` VARCHAR(50) NULL,
  `meeting_link` VARCHAR(500) NULL,
  `urgency` VARCHAR(50) DEFAULT 'Standard',
  `summary` TEXT NOT NULL,
  `status` ENUM('pending', 'reviewed', 'contacted', 'closed') DEFAULT 'pending',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Practice Areas Table
CREATE TABLE IF NOT EXISTS `practice_areas` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `tag` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `image_url` VARCHAR(500),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Attorneys Table
CREATE TABLE IF NOT EXISTS `attorneys` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `role` VARCHAR(255) NOT NULL,
  `specialty` VARCHAR(255) NOT NULL,
  `education` VARCHAR(255) NOT NULL,
  `bar` VARCHAR(255) NOT NULL,
  `experience` VARCHAR(100) NOT NULL,
  `image_url` VARCHAR(500),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Sample Seed Data for Practice Areas
INSERT INTO `practice_areas` (`title`, `tag`, `description`, `image_url`) VALUES
('Corporate & Commercial Law', 'Business Advisory', 'Mergers & acquisitions, cross-border corporate governance, partnership dissolutions, and commercial negotiations.', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'),
('Criminal Defense Litigation', 'Trial Defense', 'Relentless defense for high-profile white-collar offenses, government investigations, and courtroom trials.', 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'),
('High-Net-Worth Family Law', 'Private Client', 'Discreet counsel for complex asset divisions, contested divorces, spousal support, and custody settlements.', 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80'),
('Civil & Commercial Litigation', 'Dispute Resolution', 'Formidable courtroom advocacy for breach of contract, shareholder disputes, fraud claims, and arbitration.', 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80'),
('Property & Real Estate Law', 'Real Estate Counsel', 'Commercial property transactions, zoning and land use, title disputes, and construction litigation.', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'),
('Intellectual Property Protection', 'IP Advocacy', 'Aggressive defense and strategic registration of patent portfolios, trademarks, trade secrets, and copyright.', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80');

-- Sample Seed Data for Attorneys
INSERT INTO `attorneys` (`name`, `role`, `specialty`, `education`, `bar`, `experience`, `image_url`) VALUES
('Arthur Sterling, Esq.', 'Managing Partner & Senior Trial Advocate', 'High-Stakes Commercial Litigation & Corporate Defense', 'Harvard Law School, J.D. (Magna Cum Laude)', 'New York & Federal Bar Admission', '25+ Years Experience', 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80'),
('Victoria Hayes, Esq.', 'Senior Partner - Criminal Defense & Appeals', 'Federal Criminal Litigation & White-Collar Defense', 'Columbia Law School, J.D.', 'State & Supreme Court Bar Admission', '19+ Years Experience', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'),
('Marcus Vance, Esq.', 'Partner - Corporate Transactions & IP', 'Cross-Border Mergers, IP Portfolios & Venture Law', 'Yale Law School, LL.M.', 'New York & International Arbitration Bar', '16+ Years Experience', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80');
