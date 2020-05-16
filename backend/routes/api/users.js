const User = require("../../controllers/userController.js");
const router = require("express").Router();
// create a user
router.route("/post")
	.post(User.createUser);
// get a user
// post is used for better security
router.route("/get")
	.post(User.getUser);
// Add a build to the specific user
router.route("/:userName")
	.post(User.addBuild);
// get and update builds
router.route("/builds/:id")
	.get(User.getBuilds)
	.put(User.updateBuild);

module.exports = router;