const names = require("./names.json")
//names.Ness.first , names.Ness.last

function zp(z) {
    return Math.floor(Math.random() * z)
}
function nameMaker(request) {
    let z1 = zp(request.first.length)
    let first = request.first[z1]
    let z2 = zp(request.last.length)
    let last = request.last[z2]
    return first + " " + last
}
function attr() {
    return zp(4) + 1
}

module.exports = {
    Ness: function () {
        return mayor = {
            name: nameMaker(names.Ness),
            loyalty: attr() + 1,
            competent: attr() - 1,
            voidism: attr() - 1,
            party: "Loch Ness Monster Party"
        }
    },
    Biz: function () {
        let mayor = {
            name: nameMaker(names.Biz),
            loyalty: attr() - 1,
            competent: attr() + 1,
            voidism: attr() - 1,
            party: "Business Time Party"
        }
        return mayor
    },
    Jazz: function () {
        let mayor = {
            name: nameMaker(names.Jazz),
            loyalty: attr(),
            competent: attr(),
            voidism: attr() + 1,
            party: "That's Jazz Party"
        }
        return mayor
    },
    Fourth: function () {
        let mayor = {
            name: nameMaker(names.Fourth),
            loyalty: attr() + 1,
            competent: attr(),
            voidism: attr(),
            party: "Fourth Party"
        }
        return mayor
    }
}