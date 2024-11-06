var express = require("express");
var router = express.Router();

const Booking = require("../models/bookings.js");

  router.get("/", (req, res) => {
    Booking.find().then((data) => {
      res.json({ result : true, allBookings: data });
    });
  });


module.exports = router;