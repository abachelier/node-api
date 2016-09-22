/* Dependencies */
var mysql = require("mysql");
var config = require("./config.js");

/* Connection */
var db = mysql.createConnection({
  host     : config.db.host,
  user     : config.db.user,
  password : config.db.pass,
  database : config.db.db
});
 
db.connect(function(err){
	if(err) throw err;
});

/* Return db */
module.exports = db;