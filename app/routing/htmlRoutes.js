//Dependencies
var path = require('path');

// Display Survey Page
app.get("/survey", function(req, res) { 
    res.sendFile(path.join(__dirname + '/../public/survey.html'));

})

// Default route to display home.html
app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});