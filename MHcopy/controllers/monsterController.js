const express = require("express");
const db = require("../models/")
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    db.Monsters.getMonsters((err, data)=>{
        const hbsObject = {
            Monster: data
        }
        console.log(hbsObject)
        res.render("index", hbsObject);
    })
});

module.exports = router;