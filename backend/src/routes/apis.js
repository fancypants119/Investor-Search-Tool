const express = require("express");
const Investor = require("../models/investor.js")
const router = express.Router();


router.get("/getinvestors", (req, res, next) => {
    Investor.find({})
    .then((investors) => {
      res.send(investors);
    })
    .catch((error) => {
      res.status(400).send({
        message: "Investors not found",
      });
    });
});


router.post("/add-investor", (req, res, next) => {
  Investor.create(req.body)
    .then(() => {
      res.send("Investor Added Successfully");
    })
    .catch(next);
});


module.exports = router;