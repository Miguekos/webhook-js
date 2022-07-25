var express = require('express');
var router = express.Router();
const { getwebhook, webhook } = require('../controllers/rapuncel')

/* realizar rapuncel */
router.get('/rapuncel', getwebhook);
router.post('/rapuncel', webhook);

module.exports = router;