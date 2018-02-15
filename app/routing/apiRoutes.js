// Dependencies
var path = require('path');

// Require Data file
var resultOptions = require('../data/introvert.js');

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
module.exports = function (app) {
  // GET Route: Display a JSON of all possible friends - .toSring() to read JSON
  app.get("/api/friends", function (req, res) {
    console.log("testing is this working");
    res.json(resultOptions);
  });
  // POST Route. This will be used to handle incoming survey results and handle the compatibility logic.
  app.post('/api/friends', function (req, res) {
    res.send('POST request to the homepage')
  })

}


// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
