//Requirements
const mongoose = require("mongoose");
//Schema Declaration
const bookingSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number,
});
//Model Declaration
const Booking = mongoose.model("bookings", bookingSchema);
//Modules Export
module.exports = Booking;