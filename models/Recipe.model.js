const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var today = new Date();
var dd = String(today. getDate()). padStart(2, '0');
var mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
var yyyy = today. getFullYear();
​
today = mm + '/' + dd + '/' + yyyy;
document. write(today);

const recipeSchema = new Schema({
  title: String,
  level: {type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']},
  ingredients: [String],
  cuisine: {type: String, required: true},
  dishType: { type: String, enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other'] },
  image: {type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg'},
  duration: {type: Number, min: 0 },
  creator: String,
  created: Date

});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
