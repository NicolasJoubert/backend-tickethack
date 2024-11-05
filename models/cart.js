//Requirements
const mongoose = require("mongoose");
//Schema Declaration
const articleSchema = mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  weight: Number,
  image: String,
});
//Model Declaration
const Article = mongoose.model("articles", articleSchema);
//Modules Export
module.exports = Article;
