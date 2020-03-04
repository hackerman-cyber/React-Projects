const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"]
  },
  amount: {
    type: Number,
    required: [true, "Please add a =ve or -ve no"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
