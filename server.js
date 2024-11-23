const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

/* Loading the environment variables from the .env file. */
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/todoapiDB";

let buttonPressed = false;

// Endpoint that simulates the button press
app.post('/press-button', (req, res) => {
  buttonPressed = true;
  res.status(200).json({ message: 'Button pressed', buttonPressed });
});

module.exports = app;
