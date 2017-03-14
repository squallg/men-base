/*
 * db.js file. This helper handle DB connection with MongoDB.
 */


//Set db url here
var url = 'mongodb://localhost:27017/men-base';


/********************************* MONGODB ***********************************/

//Imports
var mongoose = require('mongoose');

//Module exports
module.exports = {

	//Connection function
	connect: function(){
		mongoose.connect(url);
		return mongoose.connection;
	},

	//Close connection function
	close: function(){
		mongoose.connection.close();
	}
}

/*****************************************************************************/