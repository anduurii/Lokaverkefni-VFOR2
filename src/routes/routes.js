const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const playerController = require('../controllers/playerController');

router.get('/', teamController.getHomePage);
router.get('/players', playerController.getHomePage);

router.get('/teams/ny', teamController.getAddTeamForm);
router.post('/teams/ny', teamController.createNewTeam);

router.get('/players/ny', playerController.getAddPlayerForm);
router.post('/players/ny', playerController.createNewPlayer);

router.get('/teams/:id', teamController.getTeamDetails);
router.get('/players/:id', playerController.getPlayerDetails);

module.exports = router;