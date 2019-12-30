const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const logger = require('morgan');
const exphbs = require('express-handlebars')


// Set up port for Heroku or localport:3000
const PORT = process.env.PORT || 3000;

// initialize Express
const app = express();

// Use mogan logger package for logging requests
app.use(logger('dev'));
// Use parse request body as JSON and URL encoded
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Use public folder a static folder
app.use(express.static('public'));

// Handlebars View Engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongodb-hw";

// connect to MongoDB
mongoose.connect(MONGODB_URI);

// ********************************
// ROUTES
// ********************************
require("./routes/scrape-routes")(app);
require('./routes/html-routes')(app);
require('./routes/api-routes')(app);


// Start the server to listen to port
app.listen(PORT, ()=>{
    console.log('App running on port ' + PORT)
})
