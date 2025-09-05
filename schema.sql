CREATE DATABASE IF NOT EXISTS website_traffic;
USE website_traffic;

-- Users table
CREATE TABLE IF NOT EXISTS users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    location VARCHAR(100),
    device VARCHAR(50),
    browser VARCHAR(50)
);

-- Page table
CREATE TABLE IF NOT EXISTS pages(
    page_id INT AUTO_INCREMENT PRIMARY KEY,
    page_url VARCHAR(255) NOT NULL,
    page_category VARCHAR(50)
);

-- Session table
CREATE TABLE IF NOT EXISTS sessions(
    session_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    entry_page_id INT,
    exit_page_id INT,
    session_start DATETIME,
    session_end DATETIME,
    duration INT,
    clicks INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (entry_page_id) REFERENCES pages(page_id),
    FOREIGN KEY (exit_page_id) REFERENCES pages(page_id)
);

