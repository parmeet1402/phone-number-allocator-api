const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhoneNumberSchema = new Schema({
  number: { type: String, required: true }
});

// expose the schema
module.exports = PhoneNumber = mongoose.model("phoneNumber", PhoneNumberSchema);
