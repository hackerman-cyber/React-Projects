const Transaction = require("../models/Transaction");

// @desc GET all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find(); // find all
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};

// @desc Add a transactions
// @route POST /api/v1/transactions
// @access Public
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body); // create and save in db
    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (err) {
    // console.log(err);
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error"
      });
    }
  }
};

// @desc DELETE a transaction
// @route GET /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = async (req, res, next) => {
  // res.send("DELETE a Transaction");
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found"
      });
    }
    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};
