const User = require("../models/users.js");

module.exports = {
	// Create a new user
	createUser: function(req,res){
		console.log(req.body);
		User.create(req.body)
			.then(response=>res.json(response))
			.catch(err=>console.log(err));
	}
};