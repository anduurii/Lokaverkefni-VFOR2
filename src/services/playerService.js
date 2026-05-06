const db = require('../lib/db');

const getAllPlayers = async () => {
    const result = await db.query('SELECT * FROM players ORDER BY nickname ASC');
    return result.rows;
};

const getPlayerById = async (id) => {
    const result = await db.query('SELECT * FROM players WHERE id = $1', [id]);

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0];    
};

const getTeamIdByName = async (name) => {
    const result = await db.query('SELECT id FROM teams WHERE title = $1', [name]);

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0].id;
}



const createPlayer = async (nickname, first_name, last_name, picture, nationality, date_of_birth, role, team) => {
    const team_id = await getTeamIdByName(team);
    
    const sql = `
        INSERT INTO players (nickname, first_name, last_name, picture, nationality, date_of_birth, role, team_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
    `;

    const values = [nickname, first_name, last_name, picture, nationality, date_of_birth, role, team_id];
    const result = await db.query(sql, values);

    return result.rows[0];
};

module.exports = {
    getAllPlayers,
    getPlayerById,
    createPlayer
};