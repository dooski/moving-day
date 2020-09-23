const generator = require("../utils/generator.js");

module.exports = {
    MayorNess: function (req, res) {
        let mayor = generator.Ness()
        res.json(mayor)
    },
    MayorBiz: function (req, res) {
        let mayor = generator.Biz()
        res.json(mayor)
    },
    MayorJazz: function (req, res) {
        let mayor = generator.Jazz()
        res.json(mayor)
    },
    MayorFourth: function (req, res) {
        let mayor = generator.Fourth()
        res.json(mayor)
    },
    City: function (req, res) {
        let city = generator.City()
        res.json(city)
    }
}