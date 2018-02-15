// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Activate express
var app = express();

// Define port
var port = process.env.PORT || 3000;

// Routes
var apiRoutes = require('./app/routing/api-routes.js')(app); 
var htmlRoutes = require('./app/routing/html-routes.js')(app);


// Data Parsing

// Activate app to listen
app.listen(port);
console.log("Listening on port " + port);



