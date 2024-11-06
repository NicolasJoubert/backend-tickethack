var express = require("express");
var router = express.Router();

const Cart = require("../models/cart.js");

  router.get("/", (req, res) => {
    Cart.find().then((data) => {
      res.json({ allTripsofCart: data });
    });
  });


module.exports = router;
