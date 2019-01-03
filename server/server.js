require('dotenv').config();
const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const routes = require("./routes");
const keys = require('./config/keys');
const app = express();
const PORT = process.env.PORT || 3001;

//session cookies - setup
const expSession = {
	secret: keys.cookies.secret,
	cookie: {}
};

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
//Session Cookies//
app.use(session(expSession));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
// Add routes, both API and view
require('./services/passport.js')(app);
app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/alleyart";

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true
});

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});