// @desc GET all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
  res.send("GET Transactions");
};

// @desc Add a transactions
// @route POST /api/v1/transactions
// @access Public
exports.addTransaction = (req, res, next) => {
  res.send("POST Transaction");
};

// @desc DELETE a transaction
// @route GET /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE a Transaction");
};
