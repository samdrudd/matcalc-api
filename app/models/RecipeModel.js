var mongoose = require('mongoose');

module.exports.recipeSchema = mongoose.Schema({
	name : String,
	type : String,
	mats : {}
});
