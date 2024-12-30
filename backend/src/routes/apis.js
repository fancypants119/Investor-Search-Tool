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



router.get("/getinvestor/:id", (req, res, next) => {
  const { id } = req.params;  
  

  Investor.findById(id)
    .then((investor) => {
      if (!investor) {
       
        return res.status(404).send({
          message: "Investor not found",
        });
      }
     
      res.send(investor);
    })
    .catch((error) => {
      res.status(400).send({
        message: "Error fetching investor data",
        error: error.message,
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