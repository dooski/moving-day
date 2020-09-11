import names from "./names.json"
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

export default {
    Ness: function () {
        let mayor = {
            name: nameMaker(names.Ness),
            loyalty: attr() + 1,
            competent: attr() - 1,
            voidism: attr() - 1,
            party: "Loch Ness Monster Party"
        }
        return mayor
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
    }
}

