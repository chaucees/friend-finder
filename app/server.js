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
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static(__dirname + '/app/public'));
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));


// Activate app to listen
app.listen(port);
console.log("Listening on port " + port);



