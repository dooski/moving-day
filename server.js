//Server dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

//Middleware
const app = express();
const PORT = process.env.PORT || 6969;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes for views and API
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/movingday", {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// });

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});