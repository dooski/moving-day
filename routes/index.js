const path = require("path");
const router = require("express").Router();
// const api = require("./api");

// //API routes
// router.use("/api", api)

//if no, then
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;