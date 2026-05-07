const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const playerController = require('../controllers/playerController');

router.get('/', teamController.getHomePage);
router.get('/players', playerController.getHomePage);

router.get('/teams/new', teamController.getAddTeamForm);
router.post('/teams/new', teamController.createNewTeam);
router.post('/teams/remove', teamController.removeTeam);


router.get('/players/new', playerController.getAddPlayerForm);
router.post('/players/new', playerController.createNewPlayer);
router.post('/players/remove', playerController.removePlayer);

router.get('/teams/:id', teamController.getTeamDetails);
router.get('/players/:id', playerController.getPlayerDetails);

module.exports = router;