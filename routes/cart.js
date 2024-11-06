var express = require("express");
var router = express.Router();

const Trip = require("../models/trips.js");


  router.get("/", (req, res) => {
    Cart.find().then((data) => {
      res.json({ allTripsofCart: data });
    });
  });


module.exports = router;
