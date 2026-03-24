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

const getTeamDetails = async(req, res) => {
    try {
        const id = req.params.id;
        const team = await teamService.getTeamById(id);
    

        if (!team) {
            return res.status(404).send('Site Not Found.');
        }

        res.render('team-details', {
            title: team.title,
            team: team
        });
    } catch (error) {
        console.error('Error getting team', error);
        res.status(500).send('System Error - Can\'t load team');
    }
};

module.exports = {
    getHomePage,
    getTeamDetails
};