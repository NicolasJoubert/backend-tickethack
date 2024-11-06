var express = require("express");
var router = express.Router();

const Trip = require("../models/trips.js");
const Cart = require("../models/carts.js");

/* GET home page. */

// CARTE SEARCH
router.get("/search/:departure/:arrival/:date", function (req, res, next) {
  // Convertir la date du paramètre en objet Date
  const searchDate = new Date(req.params.date);

  // Créer les dates de début et fin pour chercher les voyages de la journée
  const startOfDay = new Date(searchDate.setHours(0, 0, 0, 0));
  const endOfDay = new Date(searchDate.setHours(23, 59, 59, 999));

  Trip.find({
    departure: { $regex: new RegExp(`^${req.params.departure}$`, "i") },
    arrival: { $regex: new RegExp(`^${req.params.arrival}$`, "i") },
    // filtre de la date dans MongoDB gte = greater than et lte less than
    // permet de récuperer toutes les dates comprises entre le début et la fin de la journée
    date: {
      $gte: startOfDay,
      $lte: endOfDay,
    },
  }).then((data) => {
    if (data.length > 0) {
      res.json({ result: true, trip: data });
    } else {
      res.json({ result: false, error: "Trip not found" });
    }
    //console.log(data);
  });
});

router.post("/book", (req, res) => {
  const { departure, arrival, date, price } = req.body;

  const cartTrip = new Cart({
    departure: departure,
    arrival: arrival,
    date: date,
    price: price,
  });

  cartTrip.save().then((data) => {
    if (data) {
      res.json({
        result: true,
        message: "Trip added to cart successfully",
        trip: data,
      });
    } else res.json({ result: false, error: "Error" });
    console.log(data);
  });
});

module.exports = router;
