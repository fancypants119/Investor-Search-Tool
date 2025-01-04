const express = require("express");
const Investor = require("../models/investor.js")
const router = express.Router();
const { fetchSheetData } = require("../gsheets.js");

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

router.get("/getinvestorsfromsheet", async (req, res, next) => {
  try {
    const data = await fetchSheetData('1kmKsFRQOSD2Fntiu4PgXGYnHfaP_zQX_-8CNSvpJT3c', 'Sheet1!A1:P'); 
    res.json(data);
} catch (err) {
    res.status(500).send(err.message);
}
});







module.exports = router;