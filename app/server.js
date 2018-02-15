// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Activate express
var app = express();


// Define port
var port = 8889;




// Activate app to listen
app.listen(port);
console.log("Listening on port " + port);
