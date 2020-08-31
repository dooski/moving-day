const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema for each game; cityName, mayorName, and three-letter code are randomly generated upon game creation.
//round defaults to 0, once game is started by p1, set to round 1
const gameSchema = new Schema(
    {
        id: Number,
        cityName: String,
        mayorName: String,
        code: String,
        round: Number,
        players: {
            p1: {
                name: String,
                moved: false,
                lost: false
            },
            p2: {
                name: String,
                moved: false,
                lost: false
            },
            p3: {
                name: String,
                moved: false,
                lost: false
            }
        }
    }
)

const Game = mongoose.model("Game", gameSchema)

module.exports = Game
