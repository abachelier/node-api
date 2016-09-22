/* Dependencies */
var express = require('express');
var router = express.Router();

/* Middlewares */
var auth = require('../middlewares/auth.js');
var log = require('../middlewares/log.js');


/* All Routes/Controllers */
router.use(log);
router.use('/auth', require('./AuthCtrl.js'))
router.use('/posts', require('./PostCtrl.js'))

router.get('/', function(req, res) {
	res.send("Node API 1.0\n\nTo connect on the API, use POST /api/auth with json: name, password");
})

/* Return router */
module.exports = router