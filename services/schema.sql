
-- -----------------------------------------------------
-- Schema for Akalanka Ranasinghe Tutoring System
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS tutors (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    whatsapp VARCHAR(20),
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS classes (
    id SERIAL PRIMARY KEY,
    grade_level VARCHAR(50) NOT NULL,
    session_day VARCHAR(20) NOT NULL,
    start_time TIME,
    end_time TIME,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(255) NOT NULL,
    grade VARCHAR(50) NOT NULL,
    school VARCHAR(255),
    contact_number VARCHAR(20) NOT NULL,
    reason_for_joining TEXT,
    class_id INTEGER REFERENCES classes(id),
    status VARCHAR(20) DEFAULT 'PENDING',
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Initial Tutor Seed
INSERT INTO tutors (full_name, whatsapp, bio) 
VALUES ('M.R. Akalanka Ranasinghe', '+94775762639', 'Private Tutor with 10 years experience.');
