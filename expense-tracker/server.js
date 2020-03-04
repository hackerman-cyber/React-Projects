const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/db");
const transactions = require("./routes/transactions");

connectDB();

const app = express();
app.use(express.json()); // middleware body parser

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.get("/", (req, res) => res.send("Hello"));
app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server started at port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.bold
  )
);
