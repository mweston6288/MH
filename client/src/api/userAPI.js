const axios = require("axios");

export default {
	// create a new user
	createUser: function(userData){
		return axios.post("/api/user", userData);
	}
}