const Monsters = require("../models/monsters.js");

module.exports = {
	// These first three methods get monster data based on their
	// low, high, or master rank values
	getLR: function(req,res){
		Monsters.find({ lowRank: { $lte: req.params.HR } })
			.then(monsters => {
				res.json(monsters);
			}).catch((err) => {
				console.log(err);
			});
	},
	getHR: function(req, res){
		Monsters.find({ highRank: { $lte: req.params.HR } })
			.then(monsters => {
				res.json(monsters);
			}).catch((err) => {
				console.log(err);
			});
	},
	getMR: function (req, res) {
		Monsters.find({ masterRank: { $lte: req.params.HR } })
			.then(monsters => {
				res.json(monsters);
			}).catch((err) => {
				console.log(err);
			});
	},
	// This method will get monster data by specific name
	findByID: function(req, res){
		Monsters.find({ name: req.params.id })
			.then(monster => {
				res.json(monster);
			}).catch((err) => {
				console.log(err);
			});
	}
};