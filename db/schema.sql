CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE CHECK(email LIKE "%_@_%._%"),
    password VARCHAR(255) NOT NULL,
    created TIMESTAMP,
    last_login TIMESTAMP
);

CREATE TABLE IF NOT EXISTS teams (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    logo VARCHAR(255),
    region VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS players (
    id SERIAL PRIMARY KEY,
    nickname VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    nationality VARCHAR(255) NOT NULL,
    date_of_birth DATE NOT NULL,
    role VARCHAR(255) NOT NULL,
    team_id INT,

    CONSTRAINT fk_team
        FOREIGN KEY (team_id)
        REFERENCES teams(id)
        ON DELETE CASCADE
);