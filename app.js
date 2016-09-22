
/* Global Dependencies */
var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var config = require('./core/config.js');

/* Initialisation */
var app = express();

/* Bodyparser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/* CORS */
var corsOption = {
	origin: "http://local.dev"
}
app.use(cors());

/* Routing */
var router = require("./controllers/BaseCtrl.js");
app.use("/api", router);

/* Start server */
app.listen(config.port, function(){
	console.log("API running on port "+config.port);
});