const User = require("../../controllers/userController.js");
const router = require("express").Router();

router.route("/post")
	.post(User.createUser);

router.route("/get")
	.post(User.getUser);

router.route("/:userName")
	.post(User.addBuild);

router.route("/build/:id")
	.get(User.getBuild);

module.exports = router;