const User = require("../../controllers/userController.js");
const router = require("express").Router();

router.route("/")
	.post(User.createUser);

module.exports = router;