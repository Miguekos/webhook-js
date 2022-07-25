var express = require('express');
var router = express.Router();
const { helloworld } = require('../controllers/helloworld')

/* realizar helloworld */
router.get('/helloworld', helloworld);

module.exports = router;