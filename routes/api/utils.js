const router = require("express").Router();
const genController = require("../../controllers/genController");

//generate a mayor
router.route("/mayor/ness")
    .get(genController.MayorNess)

router.route("/mayor/biz")
    .get(genController.MayorBiz)

router.route("/mayor/jazz")
    .get(genController.MayorJazz)

router.route("/mayor/fourth")
    .get(genController.MayorFourth)

module.exports = router;