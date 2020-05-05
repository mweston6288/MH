const Monsters = require("../models/monsters.js");
const router = require("express").Router();

router.get("/api/monsters", (req, res)=>{
    console.log(req)
    Monsters.find().then(monsters=>{
        console.log(monsters)
        res.json(monsters);
    }).catch((err)=>{
        console.log(err)
    })
});

module.exports = router;