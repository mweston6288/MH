let mongoose = require("mongoose");
let monsterDb = require("./models/monsters.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/monsters", {
    useNewUrlParser: true,
    useFindAndModify: false
});

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
        masterRank: 1
    },
    {
        monsterID: 20,
        name: "Barroth",
        lowRank: 3,
        highRank: 11,
        masterRank: 7
    },
    {
        monsterID: 21,
        name: "Jyuratodus",
        lowRank: 3,
        highRank: 11,
        masterRank: 1
    },
    {
        monsterID: 22,
        name: "Tobi-Kadachi",
        lowRank: 4,
        highRank: 11,
        masterRank: 1
    },
    {
        monsterID: 23,
        name: "Anjanath",
        lowRank: 4,
        highRank: 11,
        masterRank: 4
    },
    {
        monsterID: 43,
        name: "Rathian",
        lowRank: 5,
        highRank: 11,
        masterRank: 4
    },
    {
        monsterID: 48,
        name: "Tzitzi-Ya-Ku",
        lowRank: 6,
        highRank: 11,
        masterRank: 1
    },
    {
        monsterID: 40,
        name: "Paolumu",
        lowRank: 6,
        highRank: 11,
        masterRank: 4
    },
    {
        monsterID: 31,
        name: "Great Girros",
        lowRank: 8,
        highRank: 11,
        masterRank: 1
    },
    {
        monsterID: 41,
        name: "Radobaan",
        lowRank: 8,
        highRank: 11,
        masterRank: 4
    },
    {
        monsterID: 36,
        name: "Legiana",
        lowRank: 8,
        highRank: 13,
        masterRank: 7
    },
    {
        monsterID: 39,
        name: "Odogaron",
        lowRank: 8,
        highRank: 13,
        masterRank: 7
    },
    {
        monsterID: 42,
        name: "Rathalos",
        lowRank: 8,
        highRank: 13,
        masterRank: 7
    },
    {
        monsterID: 28,
        name: "Diablos",
        lowRank: 8,
        highRank: 13,
        masterRank: 7
    },
    {
        monsterID: 32,
        name: "Kirin",
        lowRank: 8,
        highRank: 14,
        masterRank: 19
    },
    {
        monsterID: 52,
        name: "Zorah Magdaros",
        highRank: 11
    },
    {
        monsterID: 30,
        name: "Dodogama",
        highRank: 13,
        masterRank: 1
    },
    {
        monsterID: 44,
        name: "Pink Rathian",
        highRank: 12,
        masterRank: 6
    },
    {
        monsterID: 25,
        name: "Bazelgeuse",
        highRank: 13
    },
    {
        monsterID: 27,
        name: "Deviljho",
        highRank: 13
    },
    {
        monsterID: 35,
        name: "Lavasioth",
        highRank: 13,
        masterRank: 7
    },
    {
        monsterID: 49,
        name: "Uragaan",
        highRank: 13,
        masterRank: 7
    },
    {
        monsterID: 24,
        name: "Azure Rathalos",
        highRank: 13,
        masterRank: 13
    },
    {
        monsterID: 29,
        name: "Black Diablos",
        highRank: 13,
        masterRank: 13
    },
    {
        monsterID: 38,
        name: "Nergigante",
        highRank: 13
    },
    {
        monsterID: 45,
        name: "Teostra",
        highRank: 14,
        masterRank: 19
    },
    {
        monsterID: 37,
        name: "Lunastra",
        highRank: 16,
        masterRank: 50
    },
    {
        monsterID: 34,
        name: "Kushala Daora",
        highRank: 14,
        masterRank: 19
    },
    {
        monsterID: 50,
        name: "Vaal Hazak",
        highRank: 14
    },
    {
        monsterID: 33,
        name: "Kulve Taroth",
        highRank: 16,
        masterRank: 24
    },
    {
        monsterID: 51,
        name: "Xeno'jiiva",
        highRank: 16
    },
    {
        name: "Beotodus",
        masterRank: 1
    },
    {
        name: "Banbaro",
        masterRank: 3
    },
    {
        monsterID: 58,
        name: "Viper Tobi-Kadachi",
        masterRank: 3
    },
    {
        name:"Nightshade Paolumu",
        masterRank: 4
    },
    {
        name: "Coral Pukei-Pukei",
        masterRank: 4
    },
    {
        name: "Barioth",
        masterRank: 6
    },
    {
        name: "Nargacuga",
        masterRank: 7
    },
    {
        name: "Glavenus",
        masterRank: 7
    },
    {
        name: "Tigrex",
        masterRank: 9
    },
    {
        name: "Brachidios",
        masterRank: 9
    },
    {
        name: "Shrieking Legiana",
        masterRank: 12
    },
    {
        name: "Fulgur Anjanath",
        masterRank: 13
    },
    {
        name: "Acidic Glavenus",
        masterRank: 14
    },
    {
        name: "Ebony Odogaron",
        masterRank: 14
    },
    {
        name: "Velkhana",
        masterRank: 17
    },
    {
        name: "Seething Bazelgeuse",
        masterRank: 18
    },
    {
        name: "Blackveil Vaal Hazak",
        masterRank: 19
    },
    {
        monsterID: 59,
        name: "Namielle",
        masterRank: 20
    },
    {
        name: "Savage Deviljho",
        masterRank: 21
    },
    {
        name: "Ruiner Nergigante",
        masterRank: 100
    },
    {
        name: "Shara Ishvalda",
        masterRank: 23
    },
    {
        monsterID: 60,
        name: "Zinogre",
        masterRank: 24
    },
    {
        name: "Yian Garuga",
        masterRank: 24
    },
    {
        name: "Scarred Yian-Garuga",
        masterRank: 70
    },
    {
        name: "Gold Rathian",
        masterRank: 70
    },
    {
        name: "Silver Rathalos",
        masterRank: 70
    },
    {
        name: "Brute Tigrex",
        masterRank: 70
    },
    {
        monsterID: 57,
        name: "Rajang",
        masterRank: 24
    },
    {
        monsterID: 56,
        name: "Stygian Zinogre",
        masterRank: 24
    },
    {
        name: "Raging Brachydios",
        masterRank: 24
    },
    {
        name: "Furious Rajang",
        masterRank: 24
    },
    {
        monsterID: 26,
        name: "Behemoth",
        highRank: 16
    },
    {
        monsterID: 53,
        name: "Leshen",
        highRank: 16
    },
    {
        monsterID: 54,
        name: "Ancient Leshen",
        highRank: 50
    },
    {
        monsterID: 55,
        name: "Safi'jiiva",
        masterRank: 24
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
