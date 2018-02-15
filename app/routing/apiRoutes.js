// GET Route: Display a JSON of all possible friends - .toSring() to read JSON
app.get("/api/friends", function(req, res) { 
console.log("testing is this working");

})

// POST Route.
// This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
app.post('/api/friends', function (req, res) {
    res.send('POST request to the homepage')
  })

// Default route to display home.html