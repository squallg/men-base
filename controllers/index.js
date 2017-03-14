/*
 * index.js file. This file is the index controller.
 */

//Imports -> models
var sampleModel = require("../models/sampleMongoModel");

//Data object creation
var data = new sampleModel({
	name: "Men Base"
});

//Data save
data.save();

//module exports
module.exports = {

	//Page render
	render: function(res) {
		sampleModel.findOne({"name": "test"}, function(err, data) {
			res.render("index", {title: data.name});
		});
	}
}