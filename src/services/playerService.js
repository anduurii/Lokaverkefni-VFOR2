const db = require('../lib/db');

const getAllPlayers = async () => {
    const result = await db.query('SELECT * FROM players ORDER BY nickname ASC');
    return result.rows;
};

const getPlayerById = async () => {
    const result = await db.query('SELECT * FROM players WHERE id = $1', [id]);

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0];    
};

module.exports = {
    getAllPlayers,
    getPlayerById
};