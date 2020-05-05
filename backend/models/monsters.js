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
    lowRank:{
        type: Number
    },
    highRank:{
        type: Number
    },
    masterRank:{
        type: Number
    },
    skills:[{
        id: Number,
        name: String,
        level: Number
    }]
})
const Monsters = mongoose.model("Monsters", monstersSchema);

module.exports = Monsters;