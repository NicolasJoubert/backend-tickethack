var express = require("express");
var router = express.Router();

const Cart = require("../models/carts.js");


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

module.exports = router;
