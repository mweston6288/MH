const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Schema for user saved builds. Stores the IDs from mhw-db
const buildSchema = new Schema({
	headID: Number,
	chestID: Number,
	glovesID: Number,
	waistID: Number,
	legsID: Number,
	name: String
});
const Builds = mongoose.model("Builds", buildSchema);

module.exports = Builds;