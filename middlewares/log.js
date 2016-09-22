/* Dependencies */
var express = require("express");
var router = express.Router();

/* Log Middleware */
router
	.use(function(req, res, next){
		var today = new Date();
		var date = (today.getMonth()+1) + "-" + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		console.log(req.method+"\t"+req.originalUrl+"\t"+date);
		next();
	});

/* Return router */
module.exports = router;