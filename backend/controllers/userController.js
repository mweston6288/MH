const User = require("../models/users.js");
const Build = require("../models/builds");
module.exports = {
	// Create a new user
	createUser: function(req,res){
		User.create(req.body)
			.then(response=>{
				res.json({status: "Success", userName: response.userName});
			})
			.catch(() => res.json({ status: "Failure"}));
	},
	// Get a user based on parameters
	getUser: function(req,res){
		// FInd a single user with matching name
		User.findOne({userName:req.body.userName})
			.then(response=>{
				console.log(response);
				// Check the user password works with the provided password
				if(!response || !response.checkPassword(req.body.password)){
					res.json({ status: "Failure" });
				}else{
					// Return a success status and username if password checks out
					// This will update the user login status in the client side
					res.json({ status: "Success", userName: response.userName, _id: response._id});
				}
			})
			.catch(err=>console.log(err));
	},
	// Add a build to the user
	addBuild: function({body, params},res){
		let headID, chestID, glovesID, waistID, legsID;
		// Ensure there are actual elements
		if(body.head){
			headID = body.head.id;
		}
		if (body.chest) {
			chestID = body.chest.id;
		}
		if (body.gloves) {
			glovesID = body.gloves.id;
		}
		if (body.waist) {
			waistID = body.waist.id;
		}
		if (body.legs) {
			legsID = body.legs.id;
		}
		// Create a build in the DB
		Build.create({
			headID: headID,
			chestID: chestID,
			glovesID: glovesID,
			waistID: waistID,
			legsID: legsID
		}).then(({_id})=>{
			// Add the build id to the user
			User.findOneAndUpdate({ userName: params.userName }, { $push: { builds: _id } })
				.then(response => {
					console.log("AfterUpdate:",response);
					res.json(_id);
				});
		});
	},
	getBuilds: function({params}, res){
		User.findById(params.id).populate("builds")
			.then(response=>{
				console.log(response);
				res.json(response.builds);
			});
	}
};