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
	updateUserBuildCount: function(_id, count){
		return axios.put("/api/user/"+_id, count)
	}
}