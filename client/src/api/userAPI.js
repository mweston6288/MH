const axios = require("axios");

export default {
	// create a new user
	createUser: function(userData){
		return axios.post("/api/user", userData);
	},
	// Get a user. Passes the userData as a parameter 
	// because for some reason it doesn't work otherwise
	getUser: function(userData){
		return axios.get("/api/user", {params:userData});
	}
}