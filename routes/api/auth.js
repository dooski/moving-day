const express = require("express");
const User = require("../../models/Users");
const bcrypt = require("bcryptjs");
const router = express.Router();
const passport = require("passport");

// router.post("/register_login", (req, res, next) => {
//     passport.authenticate("local", function (err, user, info) {
//         if (err) {
//             return res.status(400).json({ errors: err });
//         }
//         if (!user) {
//             return res.status(400).json({ errors: "No user found" });
//         }
//         req.logIn(user, function (err) {
//             if (err) {
//                 return res.status(400).json({ errors: err });
//             }
//             return res.status(200).json({ success: `logged in ${user.id}` });
//         });
//     })(req, res, next);
// });

router.route("/login").post(
    passport.authenticate("local"), (req, res) => {
        res.json(req.user)
    })

router.route("/register").post(function (req, res) {
    console.log(req.body)
    let email = req.body.email
    let password = req.body.password
    const newUser = new User({ email, password });
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
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

// const newUser = new User({ email, password });
// // Hash password before saving in database
// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(newUser.password, salt, (err, hash) => {
//         if (err) throw err;
//         newUser.password = hash;
//         newUser
//             .save()
//             .then(user => {
//                 return done(null, user);
//             })
//             .catch(err => {
//                 return done(null, false, { message: err });
//             });
//     });
// });

module.exports = router;