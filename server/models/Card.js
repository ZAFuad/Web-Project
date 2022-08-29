
const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  account_no: {
    type: String,
    required: true,
  },
  CVV: {
    type: String,
    required: true,
  },
  MMYY: {
    type: String,
    required: true,
  },
  secret: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  ref_id: {
    type: String,
    required: true,
  },
});

const Card = mongoose.model("card", cardSchema);
module.exports = Card;
