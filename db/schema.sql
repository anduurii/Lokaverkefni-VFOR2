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
    team_id INT
);



INSERT INTO teams (title, logo, region, description) VALUES
("Vitality", "BREYTA", "Europe", "Team Vitality is a top-tier French esports organization 
whose CS2 squad is recognized for dynamic strategies, fast-paced aggression, 
and consistently competing at the forefront of the global scene."),
("Spirit", "BREYTA", "Europe", "Team spirit in CS2 means working together through communication, 
trust, and coordination to achieve victory as a team."),
("Falcons", "BREYTA", "Europe", "Team Falcons is a rising esports organization known for its strong roster, 
competitive ambition, and growing impact in Counter-Strike 2.");


INSERT INTO players (nickname, first_name, last_name, nationality, date_of_birth, role, team_id) VALUES
()
