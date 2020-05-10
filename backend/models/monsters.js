const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const monstersSchema = new Schema({
	monsterID:{
		type: Number
	},
	name:{
		type: String,
		trim: true,
		required: "Enter a monster name"
	},
	// Track the minimum hunter rank you will be when you can take
	// quests to hunt monsters
	lowRank:{
		type: Number
	},
	highRank:{
		type: Number
	},
	masterRank:{
		type: Number
	},
	// Skills that help against the monster
	skills:[{
		id: Number, // associated skill id from https://docs.mhw-db.com/
		name: String,
		level: Number // Maximum skill level
	}]
});
const Monsters = mongoose.model("Monsters", monstersSchema);

module.exports = Monsters;