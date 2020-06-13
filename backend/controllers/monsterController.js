const Monsters = require("../models/monsters.js");

module.exports = {
	// These first three methods get monster data based on their
	// low, high, or master rank values
	getLR: function({params},res){
		Monsters.find({ lowRank: { $lte: params.HR } })
			.then(monsters => {
				res.json(monsters);
			}).catch((err) => {
				res.json(err);
			});
	},
	getHR: function({params}, res){
		Monsters.find({ highRank: { $lte: params.HR } })
			.then(monsters => {
				res.json(monsters);
			}).catch((err) => {
				res.json(err);
			});
	},
	getMR: function ({params}, res) {
		Monsters.find({ masterRank: { $lte: params.MR } })
			.then(monsters => {
				res.json(monsters);
			}).catch((err) => {
				res.json(err);
			});
	},
	// This method will get monster data by specific name
	findMonster: function({params}, res){
		Monsters.find({ name: params.monster })
			.then(monster => {
				res.json(monster);
			}).catch((err) => {
				res.json(err);
			});
	}
};