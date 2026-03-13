CREATE TABLE IF NOT EXISTS teams (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    logo VARCHAR(255),
    region VARCHAR(255) NOT NULL,
    description TEXT
);

INSERT INTO teams (title, logo, region, description) VALUES
("Vitality", "BREYTA", "Europe", "Team Vitality is a top-tier French esports organization 
whose CS2 squad is recognized for dynamic strategies, 
fast-paced aggression, and consistently competing at the forefront of the global scene."),
("Spirit", "BREYTA", "Europe", "")