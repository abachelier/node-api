/* Database import */
var db = require("../core/db.js");
var response = require("../core/response.js");

/* Admin */
var Admin = {
	get: function(name, callback){
		var stmt = "SELECT * FROM admin WHERE name=?";
		db.query(stmt, [name], function(err, result){
			var ret = (err ? response.err(err) : response.success(result[0]));
			callback(ret);
		});
	}
};

/* Return the model */
module.exports = Admin;