const names = require("./names.json")
//names.Ness.first , names.Ness.last

function zp(z) {
    return Math.floor(Math.random() * z)
}
//mayors
function nameMakerMayor(request) {
    let z1 = zp(request.first.length)
    let first = request.first[z1]
    let z2 = zp(request.last.length)
    let last = request.last[z2]
    return first + " " + last
}
function attr() {
    return zp(4) + 1
}
//cities
function cityName() {
    let z1 = zp(names.Cities.beg.length)
    let beg = names.Cities.beg[z1]
    let z2 = zp(names.Cities.end.length)
    let end = names.Cities.end[z2]
    return beg + end
}

function cityPopulation() {
    let z = zp(998) + 1
    return z + " 000"
}

function cityTrait(request) {
    let z = zp(request.length)
    let trait = request[z]
    return trait
}

//townies
function makeTownie(request) {
    let z1 = zp(request.first.length)
    let first = request.first[z1]
    let z2 = zp(request.last.length)
    let last = request.last[z2]
    return first + " " + last
}

function makeAnimal(request) {
    let z = zp(request.length)
    let res = request[z]
    return res
}

function townieTypes() {
    let z = zp(names.Townies.types.length)
    let scale = scalePicker()
    let type = names.Townies.types[z]
    return scale + " " + type
}

function scalePicker() {
    let z = zp(8)
    if (z === 0) { return "almost" }
    if (z === 1) { return "a little" }
    if (z === 2) { return "sorta" }
    if (z === 3) { return "pretty" }
    if (z === 4) { return "really" }
    if (z === 5) { return "very" }
    if (z === 6) { return "exceptionally" }
    if (z === 7) { return "insanely" }
    else { return "NaN" }
}

module.exports = {
    Ness: function () {
        return mayor = {
            name: nameMakerMayor(names.Mayors.Ness),
            loyalty: attr() + 1,
            competent: attr() - 1,
            voidism: attr() - 1,
            party: "Loch Ness Monster Party"
        }
    },
    Biz: function () {
        let mayor = {
            name: nameMakerMayor(names.Mayors.Biz),
            loyalty: attr() - 1,
            competent: attr() + 1,
            voidism: attr() - 1,
            party: "Business Time Party"
        }
        return mayor
    },
    Jazz: function () {
        let mayor = {
            name: nameMakerMayor(names.Mayors.Jazz),
            loyalty: attr(),
            competent: attr(),
            voidism: attr() + 1,
            party: "That's Jazz Party"
        }
        return mayor
    },
    Fourth: function () {
        let mayor = {
            name: nameMakerMayor(names.Mayors.Fourth),
            loyalty: attr() + 1,
            competent: attr(),
            voidism: attr(),
            party: "Fourth Party"
        }
        return mayor
    },
    City: function () {
        let city = {
            name: cityName(),
            traits: {
                primary: cityTrait(names.Traits.primary),
                secondary: cityTrait(names.Traits.secondary)
            },
            population: cityPopulation(),
            townies: [
                {
                    name: makeTownie(names.Townies),
                    type: townieTypes()
                },
                {
                    name: makeTownie(names.Townies),
                    type: townieTypes()
                },
                {
                    name: makeTownie(names.Townies),
                    type: townieTypes()
                },
                {
                    name: makeTownie(names.Townies),
                    type: townieTypes()
                },
                {
                    name: makeAnimal(names.Townies.first),
                    type: makeAnimal(names.Townies.animals)
                },
                {
                    name: makeTownie(names.Townies),
                    type: townieTypes()
                },
                {
                    name: makeTownie(names.Townies),
                    type: townieTypes()
                },
                {
                    name: makeTownie(names.Townies),
                    type: townieTypes()
                },
                {
                    name: makeTownie(names.Townies),
                    type: townieTypes()
                },
                {
                    name: makeTownie(names.Townies),
                    type: townieTypes()
                },
                {
                    name: makeTownie(names.Townies),
                    type: townieTypes()
                },
                {
                    name: makeTownie(names.Townies),
                    type: townieTypes()
                }
            ],
            mayor: nameMakerMayor(names.Mayors.Jazz)
        }
        return city
    }
}