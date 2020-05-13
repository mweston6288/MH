const router = require("express").Router();
const monsterRoutes = require("./monsters");
const userRoutes = require("./users");

// monster related routes
router.use("/monsters", monsterRoutes);
// user related routes
router.use("/user", userRoutes);

module.exports = router;