/* Dependencies */
var express = require("express");
var jwt = require('jsonwebtoken');
var config = require("../core/config.js");
var response = require("../core/response.js");
var router = express.Router();

/* Auth Middleware */
router
	.use(function(req, res, next){
		var token = req.body.token || req.query.token || req.headers['x-access-token'];
		if(token){
			jwt.verify(token, config.api_secret, function(err, decoded){
				if(err){
					res.json(response.err(err));
				}else{
					req.decoded = decoded;
					next();
				}
			});
		}else{
			res.json(response.err("No token provided"));
		}
	});

/* Return router */
module.exports = router;