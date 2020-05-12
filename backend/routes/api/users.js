const User = require("../../controllers/userController.js");
const router = require("express").Router();

router.route("/")
	.post(User.createUser)
	.get(User.getUser);

module.exports = router;