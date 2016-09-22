/* Database import */
var db = require("../core/db.js");
var response = require("../core/response.js");

/* Post */
var Post = {};

Post.all = function(callback){
	db.query("SELECT * FROM post", function(err, result){
		var ret = (err ? response.err(err) : response.success(result));
		callback(ret);
	});
};

Post.findById = function(id, callback){
	db.query("SELECT * FROM post WHERE id=?", [id], function(err, result){
		var ret = (err ? response.err(err) : response.success(result));
		callback(ret);
	});
};

Post.create = function(params, callback){
	var today = new Date();
	var date = today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate();
	params.date = date;
	console.log(params);
	db.query("INSERT INTO post SET ?", params, function(err, result){
		var ret = (err ? response.err(err) : response.success({insertId: result.insertId}));
		callback(ret);
	});
};

Post.update = function(id, params, callback){
	params.push(id);
	db.query("UPDATE post SET title=?,content=? WHERE id=?", params, function(err, result){
		var ret = (err ? response.err(err) : response.success({changedRows:result.changedRows}));
		callback(ret);
	});
};

Post.delete = function(id, callback){
	db.query("DELETE FROM post WHERE id=?", [id], function(err, result){
		var ret = (err ? response.err(err) : response.success({affectedRows:result.affectedRows}));
		callback(ret);
	});
};

/* Return the model */
module.exports = Post;