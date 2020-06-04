const Monsters = require("../models/monsters.js");

module.exports = {
	// These first three methods get monster data based on their
	// low, high, or master rank values
	getLR: function({params},res){
		Monsters.find({ lowRank: { $lte: params.HR } })
			.then(monsters => {
				res.json(monsters);
			}).catch((err) => {
				console.log(err);
			});
	},
	getHR: function({params}, res){
		Monsters.find({ highRank: { $lte: params.HR } })
			.then(monsters => {
				res.json(monsters);
			}).catch((err) => {
				console.log(err);
			});
	},
	getMR: function ({params}, res) {
		Monsters.find({ masterRank: { $lte: params.MR } })
			.then(monsters => {
				res.json(monsters);
			}).catch((err) => {
				console.log(err);
			});
	},
	// This method will get monster data by specific name
	findMonster: function({params}, res){
		Monsters.find({ name: params.monster })
			.then(monster => {
				res.json(monster);
			}).catch((err) => {
				console.log(err);
			});
	}
};