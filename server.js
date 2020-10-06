//Server dependencies
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("./passport/setup.js")
const mongoose = require("mongoose");
const routes = require("./routes/index");
const MongoStore = require("connect-mongo")(session);

//Middleware
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes for views and API

//Connect to Atlas
// const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://" + process.env.MDBADMIN + ":" + process.env.MDBPW + "@movingday0.3acpb.gcp.mongodb.net/movingday?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     const newItem = {
//         "word": "Hello"
//     }
//     collection.insertOne(newItem).then(result => {
//         console.log("we did it")
//         client.close();
//     })
// });

// Connect mongoose to the Mongo DB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(console.log(`MongoDB connected ${uri}`))
    .catch(err => console.log(err));

//sessions for logins

app.use(
    session({
        secret: "jessica telephone",
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
);

app.use(passport.initialize());
app.use(passport.session())

app.use(routes);
// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});