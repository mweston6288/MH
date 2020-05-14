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
	saveBuild: function(userName, buildData){
		return axios.post("/api/user/"+ userName, buildData)
	}
}