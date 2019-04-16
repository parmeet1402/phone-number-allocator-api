const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// routes are included in this file
const app = express();

// set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db config
const db = require("./config/keys").mongoURI;

// connect with mongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server running on port ${port}`));
