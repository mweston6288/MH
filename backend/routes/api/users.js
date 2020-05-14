const User = require("../../controllers/userController.js");
const router = require("express").Router();

router.route("/post")
	.post(User.createUser);

router.route("/get")
	.post(User.getUser);

router.route("/build")
	.post(User.addBuild);

module.exports = router;