const router = require("express").Router();
const monsterRoutes = require("./monsters");

// monster related routes
router.use("/monsters", monsterRoutes);

module.exports = router;