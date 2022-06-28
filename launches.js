const express = require('express');
const router = express.Router();

const launchesController = require('../controllers/launchesController');

router.get('/', launchesController.getAllLaunches);
router.get('/lastest', launchesController.getLastestLaunches);
router.get('/next', launchesController.getNextLaunches);
router.get('/upcoming', launchesController.getUpComingLaunches);


module.exports = router;