const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/players', playerController.getHomePage);
router.get('/players/ny', playerController.getAddPlayerForm);
router.post('/players/ny', playerController.createNewPlayer);
router.get('/players/:id', playerController.getPlayerDetails);

module.exports = router;