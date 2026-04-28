const db = require('../lib/db');

const getAllTeams = async () => {
    const result = await db.query('SELECT * FROM teams ORDER BY title ASC');
    return result.rows;
};

const getTeamById = async (id) => {
    const result = await db.query('SELECT * FROM teams WHERE id = $1', [id]);

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0];
}

const getPlayersByTeamId = async (id) => {
    const result = await db.query('SELECT * FROM players WHERE team_id = $1 ORDER BY nickname ASC', [id]);

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows;
}

const getPlayerById = async (id) => {
    const result = await db.query('SELECT * FROM players WHERE id = $1', [id]);

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0];    
};


const createTeam = async (title, logo, region, description) => {
    const sql = `
        INSERT INTO teams (title, logo, region, description)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;

    const values = [title, logo, region, description];
    const result = await db.query(sql, values);

    return result.rows[0];
};


module.exports = {
    getAllTeams,
    getTeamById,
    getPlayersByTeamId,
    getPlayerById,
    createTeam
};