const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	userName: {
		type: String,
		required: true,
		unique: "Username is taken"
	},
	password: {
		type: String,
		required: true
	},
	// User builds
	builds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Builds"
		}
	]
});

// Compare a given password to the encrypted password for a match
userSchema.methods.checkPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};
// encrypt the password when a new user is added or updated
userSchema.pre("save", function (next) {
	if (this.isNew || this.isModified("password")) {
		this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
		next();
	} else {
		next();
	}

});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;