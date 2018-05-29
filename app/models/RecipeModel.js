var mongoose = require('mongoose');

module.exports.recipeSchema = mongoose.Schema({
	name : String,
	type : String,
	mats : [{
		"recipe" : {type : mongoose.Schema.Types.ObjectId, ref : 'Recipe'},
		"qty" : Number 
	}]
});
