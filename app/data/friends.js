/**
 * Manages this application's data.
 * 
 * The main data structure here is the list of users.
 *    - Username
 *    - Photo (URL)
 *    - Survey responses (array of integers, each value ranges from 1-5)
 */

/**
 * List of users and their survey inputs.
 * Pre-populated with two users that have scores on opposite extremes.
 */
var users_list = [
	{
		name:"Scooby Doo",
		photo:"http://images5.fanpop.com/image/photos/32000000/Scooby-scoobert-scooby-doo-rogers-32008191-250-396.jpg",
		scores:[
			1,1,1,1,1,1,1,1,1,1
		]
	},
	{
		name:"Shaggy",
		photo:"https://vignette.wikia.nocookie.net/scoobydoo/images/2/27/Original_Shaggy.jpg/revision/latest?cb=20140616153115",
		scores:[
			5,5,5,5,5,5,5,5,5,5
		]
	},
];

module.exports = users_list;
