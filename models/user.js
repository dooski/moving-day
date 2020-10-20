const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String
        },
        type: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String
        },
        alpha: {
            type: Number
        }
    }
)

module.exports = User = mongoose.model("User", userSchema)