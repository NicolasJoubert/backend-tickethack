var express = require("express");
var router = express.Router();

const Cart = require("../models/carts.js");


  router.get("/", (req, res) => {
    Cart.findAll().then((data) => {
      res.json({ allTripsofCart: data });
    });
  });


module.exports = router;
