const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/db");
const transactions = require("./routes/transactions");

connectDB();

const app = express();

// app.get("/", (req, res) => res.send("Hello"));
app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server started at port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.bold
  )
);
