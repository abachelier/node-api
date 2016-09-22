var error = {
	statusCode: null,
	message: null,
	basic: function(msg){
		this.statusCode = 200;
		this.message = msg;
		return this;
	},
	custom: function(res, code, msg){
		res.status(code);
		this.statusCode = code;
		this.message = msg;
		return this;
	}
}

var response = {
	error: null,
	result: null,
	success: function(res){
		this.error = null;
		this.result = res;
		return this;
	},
	err: function(msg){
		this.result = null;
		this.error = error.basic(msg);
		return this;
	},
	loginError: function(res){
		this.result = null;
		this.error = error.custom(res, 202, "Wrong name or password");
		return this;
	},
	authError: function(res){
		this.result = null;
		this.error = error.custom(res, 401, "You do not have the permissions to do this request.");
		return this;
	}
}

module.exports = response;