CREATE DATABASE myanimelist;
USE myanimelist;

CREATE TABLE anime(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title_name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    avg_score DECIMAL(3, 2) NOT NULL,
    image_url VARCHAR(500) NOT NULL
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE user_anime_list (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    anime_id INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    score INT,
    CONSTRAINT user_anime_list_users_fk FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT user_anime_list_anime_fk FOREIGN KEY (anime_id) REFERENCES anime(id) ON DELETE CASCADE
);