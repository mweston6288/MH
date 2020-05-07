const Monsters = require("../models/monsters.js");
const router = require("express").Router();

// Get monsters from the database. 
// HR and MR limit the search to monsters that can normally be hunted at those ranks
// Used for the search menu
router.get("/api/monsters/:HR/:MR", (req, res)=>{
    console.log()
    // Wow this is ugly
    Monsters.find({ $or: [{$or: [{ highRank: { $lte: req.params.HR }}, { lowRank: { $lte: req.params.HR }}]}, {masterRank:{$lte:req.params.MR}}]}).then(monsters=>{
        res.json(monsters);
    }).catch((err)=>{
        console.log(err)
    })
});
// Get a specific monster. Used to get recommended skills
router.get("/api/monsters/:id", (req, res) => {
    Monsters.find({name: req.params.id}).then(monster => {
        res.json(monster);
    }).catch((err) => {
        console.log(err)
    })
});

module.exports = router;