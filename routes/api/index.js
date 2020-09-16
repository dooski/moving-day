const router = require("express").Router();
const gameRoutes = require("./games");
const utilRoutes = require("./utils");

router.use("/games", gameRoutes)
router.use("/utils", utilRoutes)

module.exports = router;