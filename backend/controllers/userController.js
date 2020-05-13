const User = require("../models/users.js");

module.exports = {
	// Create a new user
	createUser: function(req,res){
		User.create(req.body)
			.then(response=>{
				console.log("response",response);
				res.json({status: "Success", userName: response.userName});
			})
			.catch(() => res.json({ status: "Failure"}));
;
	},
	// Get a user based on parameters
	getUser: function(req,res){
		// FInd a single user with matching name
		User.findOne({userName:req.body.userName})
			.then(response=>{
				// Check the user password works with the provided password
				if(!response || !response.checkPassword(req.body.password)){
					res.json({ status: "Failure" });
				}else{
					// Return a success status and username if password checks out
					// This will update the user login status in the client side
					res.json({ status: "Success", userName: response.userName });				}
			})
			.catch(err=>console.log(err));
	}
};