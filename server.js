
// Dependencies
require("dotenv").config(); // get .env variables
const { PORT = 4000 } = process.env; // pull PORT from .env, give default value of 4000
const express = require("express"); // import express
const app = express(); // create application object

// Routes
// Test route
app.get("/", (req, res) => {
    res.send("hello world");
});

// Listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));