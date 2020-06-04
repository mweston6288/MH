const User = require("../models/users.js");
const Build = require("../models/builds");
module.exports = {
	// Create a new user
	// Success/Failure depends on whether the username already exists
	createUser: function({body},res){
		User.create(body)
			.then(response=>{
				res.json({status: "Success", userName: response.userName, _id: response._id});
			})
			.catch(() => res.json({ status: "Failure"}));
	},
	// Get a user based on parameters
	getUser: function({body},res){
		// FInd a single user with matching name
		User.findOne({userName:body.userName})
			.then(response=>{
				// Check the user password works with the provided password
				if(!response || !response.checkPassword(body.password)){
					res.json({ status: "Failure" });
				}else{
					// Return a success status, username, _id, and buildCount
					// user details will update the userContext
					res.json({ status: "Success", userName: response.userName, _id: response._id, buildCount: response.buildCount});
				}
			})
			.catch(err=>console.log(err));
	},
	// Add a build to the user
	addBuild: function({body, params},res){
		const {armor} = body;
		let headID, chestID, glovesID, waistID, legsID;
		// Check if the necessary elements are in the body
		// All missing elements will be undefined and not included in the build DB
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
			// Add the build id to the user and increment buildCount
			User.findOneAndUpdate({ _id: params._id }, {$inc:{buildCount: 1}, $push: { builds: response._id } })
				.then(() => {
					res.json(response);
				});
		});
	},
	// Get builds belonging to a specific user sorted by buildCount number
	getBuilds: function({params}, res){
		User.findById(params._id).populate({path: "builds", options: { sort:{ buildNo: -1 }}})
			.then(response=>{
				res.json(response.builds);
			});
	},
	// Update a build
	// This function will cause the build to have a buildNo greater than
	// the user's buildCount. UpdateBuildNo will resolve this issue
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
	// Update a build's number. This method is used to resolve any
	// issues caused by number gaps caused by updating or deleting builds
	// This method is called after a user goes to the builds page
	// It is also used when user swaps two builds in their page
	updateBuildNo:function({body, params}, res){
		Build.findOneAndUpdate({_id:params._id},{buildNo: body.buildNo})
			.then(response=>{
				res.json(response);
			});
	},
	// Delete a build, remove it from the user's build page, and decrement the buildCount
	deleteBuild: function({body, params}, res){
		User.findOneAndUpdate({_id: params._id}, {$pull:{builds:body.buildID}, $inc:{buildCount: -1}})
			.then(response=>{
				Build.findOneAndDelete({ _id: body.buildID })
					.then(()=>{
						res.json(response);
					});
			});
	}
};