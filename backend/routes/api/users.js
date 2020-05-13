const User = require("../../controllers/userController.js");
const router = require("express").Router();

router.route("/post")
	.post(User.createUser);

router.route("/get")
	.post(User.getUser);

module.exports = router;