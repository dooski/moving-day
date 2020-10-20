const db = require("../models");

module.exports = {
    //make a new game
    create: function (req, res) {
        db.Game
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //load a game
    findById: function (req, res) {
        db.Game
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //update
    update: function (req, res) {
        db.Game
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findAllUsers: function (req, res) {
        db.User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch((err) => res.status(422).json(err))
    }
}
// { _id: { $ne: req.user._id } }, { username: 1, type: 1 }