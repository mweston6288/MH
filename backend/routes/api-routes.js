const Monsters = require("../models/monsters.js");
const router = require("express").Router();

// Get all monsters from the database. Used for the search menu
router.get("/api/monsters", (req, res)=>{
    Monsters.find().then(monsters=>{
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