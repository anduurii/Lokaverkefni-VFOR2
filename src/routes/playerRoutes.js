const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/players', playerController.getHomePage);
router.get('/players/:id', playerController.getPlayerDetails);

module.exports = router;