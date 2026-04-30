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
        const players = await teamService.getPlayersByTeamId(id);


        if (!team) {
            return res.status(404).send('Site Not Found.');
        }

        res.render('team-details', {
            title: team.title,
            team: team,
            players: players
        });
    } catch (error) {
        console.error('Error getting team', error);
        res.status(500).send('System Error - Can\'t load team');
    }
};

const getPlayerDetails = async(req, res) => {
    try {
        const id = req.params.id;
        const player = await teamService.getPlayerById(id);
    

        if (!player) {
            return res.status(404).send('Site Not Found.');
        }

        res.render('player-details', {
            title: player.nickname,
            player: player
        });
    } catch (error) {
        console.error('Error getting player', error);
        res.status(500).send('System Error - Can\'t load player');
    }
};


const getAddTeamForm = (req, res) => {
    res.render('add-team', {
        title: 'Add team'
    });
};



const createNewTeam = async (req, res) => {
    try {
        const { title, logo, region, description } = req.body;

        if (!title) {
            return res.status(400).send(
                'Title may not be empty.'
            );
        }

        const newTeam = await teamService.createTeam(
            title,
            logo,
            region,
            description
        );

        res.redirect(`/teams/${newTeam.id}`);
    } catch (error) {
        console.error('Error while making team', error);
        res.status(500).send(
            'System Error - Couldn\'t save team'
        );
    }
};


module.exports = {
    getHomePage,
    getTeamDetails,
    getPlayerDetails,
    getAddTeamForm,
    createNewTeam

};