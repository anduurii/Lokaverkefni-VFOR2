const db = require('../lib/db');

const getAllPlayers = async () => {
    const result = await db.query('SELECT * FROM players ORDER BY id ASC');
    return result.rows;
};

module.exports = {
    getAllPlayers
};