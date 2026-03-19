const db = require('../lib/db');

const getAllTeams = async () => {
    const result = await db.query('SELECT * FROM teams ORDER BY id ASC');
    return result.rows;
};

module.exports = {
    getAllTeams
};