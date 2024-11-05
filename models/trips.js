//Requirements
const mongoose = require("mongoose");
//Schema Declaration
const tripSchema = mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  weight: Number,
  image: String,
});
//Model Declaration
const Trip = mongoose.model("trips", tripSchema);
//Modules Export
module.exports = Trip;
