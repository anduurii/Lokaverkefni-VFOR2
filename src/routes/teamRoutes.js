const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

router.get('/', teamController.getHomePage);
router.get('/team/:id', teamController.getTeamDetails);
router.get('/players/:id', teamController.getPlayerDetails);

module.exports = router;