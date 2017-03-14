/*
 * This file is a sample model for mongoDB.
 */

//Imports
var mongoose = require('mongoose');

//Schema creation
var sampleSchema = mongoose.Schema({
	name: String
});

//Module exports
module.exports = mongoose.model("sampleModel", sampleSchema);

