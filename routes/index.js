var express = require("express");
var router = express.Router();

const Trip = require("../models/trips.js");

/* GET home page. */

// CARTE SEARCH
router.get("/search", function (req, res, next) {
  Trip.find().then((data) => res.json({ allTrips: data }));
});

module.exports = router;
