const Monsters = require("../../controllers/monsterController.js");
const router = require("express").Router();


// Get monsters from the database.
// Used for the search menu
// This one will get monsters based on their low rank values
router.route("/LRmonsters/:HR")
	.get(Monsters.getLR);

// This will get monsters based on their high rank values
router.route("/HRmonsters/:HR")
	.get(Monsters.getHR);
// This one will get monsters based on their master rank values
router.route("/MRmonsters/:MR")
	.get(Monsters.getMR);
// Get a specific monster. Used to get recommended skills
router.route("/:monster")
	.get(Monsters.findMonster);

module.exports = router;