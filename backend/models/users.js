const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	userName: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});
// encrypt the password
userSchema.method.encryptPassword = function(){
	this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
	return this.password;
};

const Users = mongoose.model("Users", userSchema);

module.exports = Users;