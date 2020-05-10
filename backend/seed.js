let mongoose = require("mongoose");
let monsterDb = require("./models/monsters.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/monsters", {
	useNewUrlParser: true,
	useFindAndModify: false
});

// Seeder for the monster database.
// monsterID refers to the ids at * https://docs.mhw-db.com/
// Skills refer to skills that are useful against the monster
let monsterSeed =[
	{
		monsterID: 17,
		name: "Great Jagras",
		lowRank: 1,
		highRank: 11,
		masterRank: 1
	},
	{
		monsterID: 18,
		name: "Kulu-Ya-Ku",
		lowRank: 2,
		highRank: 11,
		masterRank: 1
	},
	{
		monsterID: 19,
		name: "Pukei-Pukei",
		lowRank: 2,
		highRank: 11,
		masterRank: 1,
		skills:[
		{
			id:1,
			name: "Poison Resistance",
			level: 3
		},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
	]
	},
	{
		monsterID: 20,
		name: "Barroth",
		lowRank: 3,
		highRank: 11,
		masterRank: 7,
		skills:[
			{
				id: 5,
				name: "Muck Resistance",
				level: 1
			},
			{
				id: 21,
				name: "Water Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 21,
		name: "Jyuratodus",
		lowRank: 3,
		highRank: 11,
		masterRank: 1,
		skills: [
			{
				id: 5,
				name: "Muck Resistance",
				level: 1
			},
			{
				id: 21,
				name: "Water Resistance",
				level: 3	
			}
		]
	},
	{
		monsterID: 22,
		name: "Tobi-Kadachi",
		lowRank: 4,
		highRank: 11,
		masterRank: 1,
		skills: [
			{
				id: 23,
				name: "Thunder Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 23,
		name: "Anjanath",
		lowRank: 4,
		highRank: 11,
		masterRank: 4,
		skills: [
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 43,
		name: "Rathian",
		lowRank: 5,
		highRank: 11,
		masterRank: 4,
		skills: [
			{
				id: 1,
				name: "Poison Resistance",
				level: 3
			},
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 48,
		name: "Tzitzi-Ya-Ku",
		lowRank: 6,
		highRank: 11,
		masterRank: 1,
		skills: [
			{
				id: 4,
				name: "Stun Resistance",
				level: 3
			}
		]
	},
	{
		monsterID: 40,
		name: "Paolumu",
		lowRank: 6,
		highRank: 11,
		masterRank: 4,
		skills: [
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 31,
		name: "Great Girros",
		lowRank: 8,
		highRank: 11,
		masterRank: 1,
		skills: [
			{
				id: 2,
				name: "Paralysis Resistance",
				level: 3
			}
		]
	},
	{
		monsterID: 41,
		name: "Radobaan",
		lowRank: 7,
		highRank: 11,
		masterRank: 4,
		skills: [
			{
				id: 3,
				name: "Sleep Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 36,
		name: "Legiana",
		lowRank: 8,
		highRank: 13,
		masterRank: 7,
		skills: [
			{
				id: 22,
				name: "Ice Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 39,
		name: "Odogaron",
		lowRank: 8,
		highRank: 13,
		masterRank: 7,
		skills: [
			{
				id: 17,
				name: "Bleeding Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 42,
		name: "Rathalos",
		lowRank: 8,
		highRank: 13,
		masterRank: 7,
		skills: [
			{
				id: 1,
				name: "Poison Resistance",
				level: 3
			},
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 4,
				name: "Stun Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 28,
		name: "Diablos",
		lowRank: 8,
		highRank: 13,
		masterRank: 7,
		skills: [
			{
				id: 4,
				name: "Stun Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 32,
		name: "Kirin",
		lowRank: 8,
		highRank: 14,
		masterRank: 19,
		skills: [
			{
				id: 23,
				name: "Thunder Resistance",
				level: 3
			},
			{
				id: 2,
				name: "Paralysis Resistance",
				level: 3
			}
		]
	},
	{
		monsterID: 52,
		name: "Zorah Magdaros",
		highRank: 10,
		skills: [
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			}
		]
	},
	{
		monsterID: 30,
		name: "Dodogama",
		highRank: 13,
		masterRank: 1,
		skills: [
			{
				id: 6,
				name: "Blast Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 44,
		name: "Pink Rathian",
		highRank: 12,
		masterRank: 6,
		skills: [
			{
				id: 1,
				name: "Poison Resistance",
				level: 3
			},
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 25,
		name: "Bazelgeuse",
		highRank: 13,
		skills: [
			{
				id: 6,
				name: "Blast Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 27,
		name: "Deviljho",
		highRank: 13,
		skills: [
			{
				id: 24,
				name: "Dragon Resistance",
				level: 3
			},
			{
				id: 8,
				name: "Iron Skin",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 35,
		name: "Lavasioth",
		highRank: 13,
		masterRank: 7,
		skills: [
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			}
		]
	},
	{
		monsterID: 49,
		name: "Uragaan",
		highRank: 13,
		masterRank: 7,
		skills: [
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 3,
				name: "Sleep Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 24,
		name: "Azure Rathalos",
		highRank: 13,
		masterRank: 13,
		skills: [
			{
				id: 1,
				name: "Poison Resistance",
				level: 3
			},
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 4,
				name: "Stun Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 29,
		name: "Black Diablos",
		highRank: 13,
		masterRank: 13,
		skills: [
			{
				id: 4,
				name: "Stun Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 38,
		name: "Nergigante",
		highRank: 13,
		skills: [
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 45,
		name: "Teostra",
		highRank: 14,
		masterRank: 19,
		skills: [
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 6,
				name: "Blast Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 37,
		name: "Lunastra",
		highRank: 16,
		masterRank: 50,
		skills: [
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 34,
		name: "Kushala Daora",
		highRank: 14,
		masterRank: 19,
		skills: [
			{
				id: 4,
				name: "Stun Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 50,
		name: "Vaal Hazak",
		highRank: 14,
		skills: [
			{
				id: 13,
				name: "Effluvia Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 33,
		name: "Kulve Taroth",
		highRank: 16,
		masterRank: 24,
		skills: [
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 51,
		name: "Xeno'jiiva",
		highRank: 15,
		skills: [
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 24,
				name: "Dragon Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Beotodus",
		masterRank: 1,
		skills: [
			{
				id: 22,
				name: "Ice Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		name: "Banbaro",
		masterRank: 2,
		skills: [
			{
				id: 21,
				name: "Water Resistance",
				level: 3
			},
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 22,
				name: "Ice Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 58,
		name: "Viper Tobi-Kadachi",
		masterRank: 3,
		skills: [
			{
				id: 1,
				name: "Poison Resistance",
				level: 3
			},
			{
				id: 2,
				name: "Paralysis Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		name:"Nightshade Paolumu",
		masterRank: 4,
		skills: [
			{
				id: 3,
				name: "Sleep Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		name: "Coral Pukei-Pukei",
		masterRank: 4,
		skills: [
			{
				id: 21,
				name: "Water Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		name: "Barioth",
		masterRank: 6,
		skills: [
			{
				id: 22,
				name: "Ice Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Nargacuga",
		masterRank: 7,
		skills: [
			{
				id: 17,
				name: "Bleeding Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Glavenus",
		masterRank: 7,
		skills: [
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Tigrex",
		masterRank: 9,
		skills: [
			{
				id: 21,
				name: "Water Resistance",
				level: 3
			},
			{
				id: 22,
				name: "Ice Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Brachidios",
		masterRank: 9,
		skills: [
			{
				id: 6,
				name: "Blast Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Shrieking Legiana",
		masterRank: 12,
		skills: [
			{
				id: 22,
				name: "Ice Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Fulgur Anjanath",
		masterRank: 13,
		skills: [
			{
				id: 23,
				name: "Thunder Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		name: "Acidic Glavenus",
		masterRank: 14,
		skills: [
			{
				id: 8,
				name: "Iron Skin",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Ebony Odogaron",
		masterRank: 14,
		skills: [
			{
				id: 17,
				name: "Bleeding Resistance",
				level: 3
			},
			{
				id: 24,
				name: "Dragon Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		name: "Velkhana",
		masterRank: 16,
		skills: [
			{
				id: 22,
				name: "Ice Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Seething Bazelgeuse",
		masterRank: 18,
		skills: [
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 6,
				name: "Blast Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Blackveil Vaal Hazak",
		masterRank: 19,
		skills: [
			{
				id: 13,
				name: "Effluvia Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 59,
		name: "Namielle",
		masterRank: 20,
		skills: [
			{
				id: 21,
				name: "Water Resistance",
				level: 3
			},
			{
				id: 23,
				name: "Thunder Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Savage Deviljho",
		masterRank: 21,
		skills: [
			{
				id: 21,
				name: "Water Resistance",
				level: 3
			},
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 22,
				name: "Ice Resistance",
				level: 3
			},
			{
				id: 24,
				name: "Dragon Resistance",
				level: 3
			},
			{
				id: 8,
				name: "Iron Skin",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Ruiner Nergigante",
		masterRank: 100,
		skills: [
			{
				id: 17,
				name: "Bleeding Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Shara Ishvalda",
		masterRank: 22,
		skills: [
			{
				id: 4,
				name: "Stun Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 60,
		name: "Zinogre",
		masterRank: 24,
		skills: [
			{
				id: 23,
				name: "Thunder Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		name: "Yian Garuga",
		masterRank: 24,
		skills: [
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Scarred Yian-Garuga",
		masterRank: 70,
		skills: [
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 4,
				name: "Stun Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Gold Rathian",
		masterRank: 70,
		skills: [
			{
				id: 1,
				name: "Poison Resistance",
				level: 3
			},
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Silver Rathalos",
		masterRank: 70,
		skills: [
			{
				id: 1,
				name: "Poison Resistance",
				level: 3
			},
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 4,
				name: "Stun Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Brute Tigrex",
		masterRank: 70,
		skills: [
			{
				id: 21,
				name: "Water Resistance",
				level: 3
			},
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 57,
		name: "Rajang",
		masterRank: 24,
		skills: [
			{
				id: 23,
				name: "Thunder Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 56,
		name: "Stygian Zinogre",
		masterRank: 24,
		skills: [
			{
				id: 24,
				name: "Dragon Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		name: "Raging Brachydios",
		masterRank: 24,
		skills: [
			{
				id: 6,
				name: "Blast Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		name: "Furious Rajang",
		masterRank: 24,
		skills: [
			{
				id: 23,
				name: "Thunder Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 26,
		name: "Behemoth",
		highRank: 16,
		skills: [
			{
				id: 23,
				name: "Thunder Resistance",
				level: 3
			},
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 17,
				name: "Bleeding Resistance",
				level: 3
			},
			{
				id: 8,
				name: "Iron Skin",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	},
	{
		monsterID: 53,
		name: "Leshen",
		highRank: 16,
		skills: [
			{
				id: 17,
				name: "Bleeding Resistance",
				level: 3
			}
		]
	},
	{
		monsterID: 54,
		name: "Ancient Leshen",
		highRank: 50,
		skills: [
			{
				id: 17,
				name: "Bleeding Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 3
			}
		]
	},
	{
		monsterID: 55,
		name: "Safi'jiiva",
		masterRank: 24,
		skills: [
			{
				id: 20,
				name: "Fire Resistance",
				level: 3
			},
			{
				id: 24,
				name: "Dragon Resistance",
				level: 3
			},
			{
				id: 9,
				name: "Earplugs",
				level: 5
			}
		]
	}
];
monsterDb.deleteMany({})
	.then(() => monsterDb.collection.insertMany(monsterSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
