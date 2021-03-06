const axios = require("axios");

export default {
	// create a new user
	createUser: function(userData){
		return axios.post("/api/user/post", userData);
	},
	// Get a user. It's a post because otherwise I'd have 
	// to add the user data in the url
	getUser: function(userData){
		return axios.post("/api/user/get", userData);
	},
	// Save a build to the user
	saveBuild: function(_id, buildData){
		return axios.post("/api/user/"+ _id, buildData)
	},
	// Get user builds
	getBuilds: function(userID){
		return axios.get("/api/user/builds/" + userID)
	},
	// update a build; associated user ID is in buildData._id
	updateBuild: function(buildData){
		return axios.put("/api/user/builds/"+buildData._id, buildData)
	},
	// update user buildCount value
	updateUserBuildCount: function(_id, count){
		return axios.put("/api/user/"+_id, count)
	},
	// update the build's buildNo
	updateBuildNo: function(_id, buildNo){
		return axios.put("/api/user/builds/updateBuildNo/"+_id, {buildNo})
	},
	// Update a user's build array to remove a build and delete the build
	// from the build DB
	deleteBuild: function(_id, buildID){
		return axios.put("/api/user/deleteBuild/"+_id, {buildID});
	}
}