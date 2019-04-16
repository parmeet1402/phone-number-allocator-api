const express = require("express");
const PhoneNumber = require("../models/phoneNumber");
const keys = require("../../config/keys");
const randomNumber = require("../../common/randomNumber");

// set up router
const router = express.Router();

// ------- Set up Routes ----------

// Route  --> GET api/phoneNumbers/
// Desc   --> Tests phoneNumbers route
// Access --> Public
router.get("/test", (req, res) => {
  res.json({ message: "Phone Number works" });
});

// Route  --> GET api/phoneNumbers/
// Desc   --> gets random telephone number
// Access --> Public
router.get("/", (req, res) => {
  let number;
  numbers = `${randomNumber(3)}-${randomNumber(3)}-${randomNumber(4)}`;
  PhoneNumber.findOne({ number }).then(number => {
    if (number) {
      numbers = `${randomNumber(3)}-${randomNumber(3)}-${randomNumber(4)}`;
    }
    const newNumber = new PhoneNumber({
      number: numbers
    });
    newNumber
      .save()
      .then(number => res.json("Your number is " + number.number))
      .catch(err => console.log(err));
  });
});

// Route  --> POST api/phoneNumbers/
// Desc   --> allows to get a specific telephone number
// Access --> Public
router.post("/", (req, res) => {
  let numbers;
  numbers = req.body.number;
  PhoneNumber.findOne({ number: numbers }).then(number => {
    if (number) {
      numbers = `${randomNumber(3)}-${randomNumber(3)}-${randomNumber(4)}`;
    }
    const newNumber = new PhoneNumber({
      number: numbers
    });
    newNumber
      .save()
      .then(number => res.json("Your number is " + number.number))
      .catch(err => console.log(err));
  });
});

module.exports = router;
