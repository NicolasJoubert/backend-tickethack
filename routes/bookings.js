var express = require("express");
var router = express.Router();

const Booking = require("../models/bookings.js");

  router.get("/", (req, res) => {
    Bookings.find().then((data) => {
      res.json({ allBookings: data });
    });
  });


module.exports = router;