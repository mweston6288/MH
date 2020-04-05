const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const monsters = require("../migrations/20200405125318-create-monsters.js");
const models = require("../models")

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    console.log(models)
});

module.exports = router;