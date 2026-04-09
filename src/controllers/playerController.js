const playerService = require('../services/playerService');

const getHomePage = async (req, res) => {
    try {
        const players = await playerService.getAllPlayers();

        res.render('players', {
            title : 'CSpedia',
            players : players
        });
    } catch (error) {
        console.error('Error with getting players:', error);
        res.status(500).send("System Error - Can't load players")
    }
};

const getPlayerDetails = async(req, res) => {
    try {
        const id = req.params.id;
        const player = await playerService.getPlayerById(id);
    

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

module.exports = {
    getHomePage,
    getPlayerDetails
};