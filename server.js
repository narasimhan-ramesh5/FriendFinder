/**
 * Server side code for the FriendFinder app.
 */

/* Required modules */
var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8000;
var app = express();


// Sets up the Express server to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// =============================================================

// API Routing
require("./app/routing/apiRoutes")(app);

// HTML routing
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
	console.log("Server listening on port " + PORT);
});
