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

const getAddPlayerForm = (req, res) => {
    res.render('add-player', {
        title: 'Add player'
    });
};  

const createNewPlayer = async (req, res) => {
    try {
        const { nickname, first_name, last_name, picture, nationality, date_of_birth, role } = req.body;

        if (!nickname) {
            return res.status(400).send(
                'Nickname may not be empty'
            );
        }

        const newPlayer = await playerService.createPlayer(
            nickname, 
            first_name, 
            last_name, 
            picture, 
            nationality, 
            date_of_birth, 
            role
        );

        res.redirect(`/players/${newPlayer.id}`);
    } catch (error) {
        console.error('Error while making player', error);
        res.status(500).send(
            'System Error - Couldn\'t save player'
        );
    }
};

module.exports = {
    getHomePage,
    getPlayerDetails,
    getAddPlayerForm,
    createNewPlayer
};