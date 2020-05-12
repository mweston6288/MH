const User = require("../models/users.js");

module.exports = {
	// Create a new user
	createUser: function(req,res){
		User.create(req.body)
			.then(response=>res.json(response))
			.catch(err=>console.log(err));
	},
	// Get a user based on parameters
	getUser: function(req,res){
		User.find(req.query)
			.then(response=>res.json(response))
			.catch(err=>console.log(err));
	}
};