const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema for each game; cityName, mayorName, and three-letter code are randomly generated upon game creation.
//round defaults to 0, once game is started by p1, set to round 1
const gameSchema = new Schema(
    {
        cityName: String,
        mayorName: String,
        mayorParty: String,
        round: Number,
        election: {
            ness: {
                name: String,
                votes: Number,
                won: false
            },
            biz: {
                name: String,
                votes: Number,
                won: false
            },
            jazz: {
                name: String,
                votes: Number,
                won: false
            },
            fourth: {
                name: String,
                votes: Number,
                won: false
            }
        }
    }
)

const Game = mongoose.model("Game", gameSchema)

module.exports = Game
