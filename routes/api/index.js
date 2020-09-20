const router = require("express").Router();
const gameRoutes = require("./games");
const utilRoutes = require("./utils");
const authRoutes = require("./auth")

router.use("/games", gameRoutes)
router.use("/utils", utilRoutes)
router.use("/auth", authRoutes)

module.exports = router;