const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

//create a game e 
router.route("/")
    .post(gamesController.create);

//load and update a game
router.route("/:id")
    .get(gamesController.findById)
    .put(gamesController.update)

router.route("/citizens")
    .get(gamesController.findAllUsers)

module.exports = router;