//Requirements
const mongoose = require("mongoose");
//Schema Declaration
const tripSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number,
});
//Model Declaration
const Trip = mongoose.model("trips", tripSchema);
//Modules Export
module.exports = Trip;
