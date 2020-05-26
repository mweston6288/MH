const User = require("../models/users.js");
const Build = require("../models/builds");
module.exports = {
	// Create a new user
	createUser: function({body},res){
		body.buildCount = 0;
		User.create(body)
			.then(response=>{
				res.json({status: "Success", userName: response.userName, _id: response._id});
			})
			.catch(() => res.json({ status: "Failure"}));
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
					res.json({ status: "Success", userName: response.userName, _id: response._id, buildCount: response.buildCount});
				}
			})
			.catch(err=>console.log(err));
	},
	// Add a build to the user
	addBuild: function({body, params},res){
		const {armor} = body;
		let headID, chestID, glovesID, waistID, legsID;
		// Ensure there are actual elements
		if(armor.head){
			headID = armor.head.id;
		}
		if (armor.chest) {
			chestID = armor.chest.id;
		}
		if (armor.gloves) {
			glovesID = armor.gloves.id;
		}
		if (armor.waist) {
			waistID = armor.waist.id;
		}
		if (armor.legs) {
			legsID = armor.legs.id;
		}
		// Create a build in the DB
		Build.create({
			headID: headID,
			chestID: chestID,
			glovesID: glovesID,
			waistID: waistID,
			legsID: legsID,
			name: body.name,
			buildNo: body.buildNo
		}).then((response)=>{
			// Add the build id to the user
			User.findOneAndUpdate({ _id: params._id }, {$inc:{buildCount: 1}, $push: { builds: response._id } })
				.then(() => {
					res.json(response);
				});
		});
	},
	// Get builds belonging to a specific user
	getBuilds: function({params}, res){
		User.findById(params._id).populate({path: "builds", options: { sort:{ buildNo: -1 }}})
			.then(response=>{
				res.json(response.builds);
			});
	},
	// Update a build
	updateBuild: function({body, params}, res){
		const {armor} = body;
		let headID, chestID, glovesID, waistID, legsID;
		// Ensure there are actual elements
		// and set them to the values we need
		if (armor.head) {
			headID = armor.head.id;
		}
		if (armor.chest) {
			chestID = armor.chest.id;
		}
		if (armor.gloves) {
			glovesID = armor.gloves.id;
		}
		if (armor.waist) {
			waistID = armor.waist.id;
		}
		if (armor.legs) {
			legsID = armor.legs.id;
		}
		// Find and update the build
		Build.findOneAndUpdate({ _id: params._id }, {
			headID: headID,
			chestID: chestID,
			glovesID: glovesID,
			waistID: waistID,
			legsID: legsID,
			name: body.name,
			buildNo: body.buildNo
		}).then(response=>{
			res.json(response);
		}).catch(err=>console.log(err));
	},
	updateBuildNo:function({body, params}, res){
		console.log(body);
		console.log(params);
		Build.findOneAndUpdate({_id:params._id},{buildNo: body.buildNo})
			.then(response=>{
				console.log(response);
				res.json(response);
			});
	}
};