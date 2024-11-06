//Requirements
const mongoose = require("mongoose");
//Schema Declaration
const cartSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number,
});
//Model Declaration
const Cart = mongoose.model("carts", cartSchema);
//Modules Export
module.exports = Cart;