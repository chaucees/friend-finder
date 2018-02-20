// Dependencies
var path = require('path');

// Require Data file
var friendsData = require('../data/friends.js');

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
module.exports = function (app) {
  // GET Route: Display a JSON of all possible friends - .toSring() to read JSON
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
    console.log("is this working");
  });

  // POST Route. This will be used to handle incoming survey results and handle the compatibility logic.
  app.post('/api/friends', function (req, res) {

    // Best match object
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 50
    };

    // Parse results of the user's survey answers
    var userData = req.body;
    var userName = userData.name;
    var userPhoto = userData.photo;
    var userScores = userData.scores;

    var totalDifference = 0;
    
    // Compare user with potential friend match
    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;

      for (var s = 0; s < friends[i].length; s++) {
        totalDifference += Math(parseInt(userScores[s]) - parseInt(friends[i].scores[s]));

        // If the sum is less or equal to the differences then reset bestMatch to new friend.
        if (totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }
    
    res.json(userData);
  })

}


// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
