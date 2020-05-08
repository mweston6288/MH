const Monsters = require("../models/monsters.js");
const router = require("express").Router();

// Get monsters from the database. 
// Used for the search menu
// This one will get monsters based on their low rank values
router.get("/api/LRmonsters/:HR/", (req, res)=>{
    console.log()
    Monsters.find({lowRank: { $lte: req.params.HR }}).then(monsters=>{
        res.json(monsters);
    }).catch((err)=>{
        console.log(err)
    })
});
// This will get monsters based on their high rank values
router.get("/api/HRmonsters/:HR/", (req, res) => {
    console.log()
    Monsters.find({ highRank: { $lte: req.params.HR }}).then(monsters => {
        res.json(monsters);
    }).catch((err) => {
        console.log(err)
    })
});
// This one will get monsters based on their master rank values
router.get("/api/MRmonsters/:MR/", (req, res) => {
    console.log()
    Monsters.find({ masterRank: { $lte: req.params.MR } }).then(monsters => {
        res.json(monsters);
    }).catch((err) => {
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