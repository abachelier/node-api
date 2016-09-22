/* Dependencies */
var express = require("express");
var jwt = require('jsonwebtoken');
var config = require("../core/config.js");
var response = require("../core/response.js");
var router = express.Router();

/* Require Model */
var Admin = require("../models/Admin.js");

/* Routes */
router
	.post("/", function(req, res, next){
		Admin.get(req.body.name, function(result){
			var admin = result.result;
			if(admin){
				if(req.body.password == admin.password){
					var tokenExpiration = 3600;
					var token = jwt.sign({user:"test",password:"test"}, config.api_secret, {
						expiresIn: tokenExpiration
					});
					res.json(response.success({token: token, expiresIn: tokenExpiration}));
				}else{
					res.json(response.loginError(res));
				}
			}else{
				res.json(response.loginError(res));
			}
		});
	});

/* Return router */
module.exports = router;