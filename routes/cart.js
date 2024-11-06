var express = require("express");
var router = express.Router();

const Cart = require("../models/carts.js");

const Booking = require("../models/bookings.js");

router.get("/", (req, res) => {
  Cart.find().then((data) => {
    res.json({ allTripsofCart: data });
  });
});

router.delete("/:id", function (req, res, next) {
  const tripId = req.params.id;
  Cart.deleteOne({ _id: tripId }).then((result) => {
    if (result.deletedCount > 0) {
      res.json({ result: true });
    } else {
      res.json({ result: false, error: "City not found" });
    }
  });
});

router.post("/purchase", (req, res) => {
  const { tripData } = req.body;

  const BookingTrip = new Booking({
    departure: departure,
    arrival: arrival,
    date: date,
    price: price,
  });

  BookingTrip.save().then((data) => {
    if (data) {
      res.json({
        result: true,
        message: "Trip added to booking",
        trip: data,
      });
    } else res.json({ result: false, error: "Error" });
    console.log(data);
  });
});

module.exports = router;
