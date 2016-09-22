/* Dependencies */
var express = require("express");
var router = express.Router();

/* Require Model */
var Post = require("../models/Post.js");

/* Posts Routes */
router
	.get("/", function(req, res, next){
		Post.all(function(result){
			res.json(result);
		});
	})
	.post("/", function(req, res, next){
		var params = {"title":req.body.title, "content":req.body.content};
		Post.create(params, function(result){
			res.json(result);
		});
	})
	.get("/:id", function(req, res, next){
		Post.findById(req.params.id, function(result){
			res.json(result);
		});
	})
	.put("/:id", function(req, res, next){
		var params = [req.body.title, req.body.content];
		Post.update(req.params.id, params, function(result){
			res.json(result);
		});
	})
	.delete("/:id", function(req, res, next){
		Post.delete(req.params.id, function(result){
			res.json(result);
		});
	});

/* Return router */
module.exports = router;