
// Dependencies
require("dotenv").config(); // get .env variables
const { PORT = 4000, MONGODB_URL } = process.env; // pull PORT from .env, give default value of 4000
const express = require("express"); // import express
const app = express(); // create application object
// import mongoose
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");


mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

// MiddleWare
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
// Test route
app.get("/", (req, res) => {
    res.send("hello world");
});

// Listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));