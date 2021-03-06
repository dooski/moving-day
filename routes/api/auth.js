const express = require("express");
const db = require("../../models");
const bcrypt = require("bcryptjs");
const router = express.Router();
const gamesController = require("../../controllers/gamesController");
const passport = require("passport");

router.route("/user").get(function (req, res) {
    console.log(req.user)
    db.User.findOne({
        where: {
            id: req.user._id
        },
    })
        .then(() => {
            res.json({
                username: req.user.username, type: req.user.type
            })
        })
        .catch((err) => res.status(422).json(err))
}
)


router.route("/login").post(
    passport.authenticate("local"), (req, res) => {
        res.json(req.user)
    })

router.route("/register").post(function (req, res) {
    console.log(req.body)
    let email = req.body.email
    let password = req.body.password
    let type = req.body.type
    let username = req.body.username
    let alpha = req.body.alpha
    const newUser = new db.User({ username, type, email, password, alpha });
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            console.log(newUser)
            newUser
                .save()
                .then(user => {
                    return res.json(user)
                })
                .catch(err => {
                    return res.status(400).json({ message: err })
                })
        })
    })
})

router.route("/logout").get(function (req, res) {
    req.logout();
    res.status(200).json({ message: 'logged out' })
})

router.route("/citizens")
    .get(gamesController.findAllUsers)

module.exports = router;