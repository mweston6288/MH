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
router.route("/:_id")
	.post(User.addBuild);
// get and update builds
router.route("/builds/:_id")
	.get(User.getBuilds)
	.put(User.updateBuild);
router.route("/builds/updateBuildNo/:_id")
	.put(User.updateBuildNo);
router.route("/deleteBuild/:_id")
	.put(User.deleteBuild);
module.exports = router;