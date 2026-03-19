const teamService = require('../services/teamService');

const getHomePage = async (req, res) => {
    try {
        const teams = await teamService.getAllTeams();

        res.render('index', {
            title : 'CSpedia',
            teams: teams
        });
    } catch (error) {
        console.error('Error with getting teams:', error);
        res.status(500).send("System Error - Can't load teams")
    }
};

module.exports = {
    getHomePage
};

