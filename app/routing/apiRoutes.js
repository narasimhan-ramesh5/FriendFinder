/**
 * This file implements the api route handlers
 */

 var users_list = require('../data/friends');

module.exports = function(app) {

	/**
	 * Post handler for '/api/friends'.
	 * Finds the most compatible friend based on the survey answers.
	 * Also adds this new user to the list of users.
	 */  
	app.post("/api/friends", function(req, res) {
		console.log("Got a post request - new survey data");
		var thisUser = req.body;
		var mostCompatible;

		mostCompatible = find_most_compatible(thisUser);
		if(!mostCompatible){
			// Error handling
		}
		//console.log(req.body);
		users_list.push(thisUser);

		res.send(mostCompatible);
	});

	/**
	 * Get handler for '/api/friends'
	 * Returns the current list of users.
	 */
	app.get("/api/friends" , function(req, res){
		res.send(users_list);
	});
}

/**
 * Helper function to find the most compatible user.
 * Is used by the post handler. Doesn't have to be exported.
 */
function find_most_compatible(newUser){
	var min_difference = 50;
	var most_compatible_index = -1;

	/* Iterate through list of users to find the most compatible match */
	for(let i = 0; i < users_list.length; i++){
		current_difference = compute_difference(newUser.scores, users_list[i].scores);
		if(current_difference < min_difference){
			min_difference = current_difference;
			most_compatible_index = i;
		}
	}

	/* Did not find any compatible match - shouldn't happen, but handle it anyway */
	if(most_compatible_index < 0){
		return undefined;
	}

	return(users_list[most_compatible_index])
}

/**
 * Helper function to compute the distance between the
 * survey responses (scores) of two users.
 * Used by 'find_most_compatible'. Doesn't have to be exported.
 */
function compute_difference(scores1, scores2){
	var difference = 0;
	for(let i = 0; i < scores1.length; i++){
		difference += Math.abs(scores1[i] - scores2[i]);
	}
	//console.log("returning a difference of " + difference);
	return difference;
}
