var express = require('express');
var router = express.Router();
const { webhook } = require('../controllers/rapuncel')

/* realizar rapuncel */
router.post('/rapuncel', webhook);

module.exports = router;