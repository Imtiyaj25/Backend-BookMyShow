// Load environment variables from .env file
require("dotenv").config();

// Import required libraries
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import database connection function and Booking schema
const connectToDatabase = require("./connection");
const Booking = require("./schema");

// Create an Express application
const app = express();

// Use CORS middleware to handle cross-origin requests
app.use(cors());

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json());

// Connect to the MongoDB database
connectToDatabase();

// Set the port for the server, use environment variable or default to 8080
const PORT = process.env.PORT || 8080;

// Endpoint to make a booking
app.post("/api/booking", async (req, res) => {
  try {
    // Extract relevant data from the request body
    const { movie, seats, slot } = req.body;

    // Create a new Booking document and save it to the database
    const booking = new Booking({ movie, seats, slot });
    await booking.save();

    // Respond with a success message
    res.status(200).send("Booking successful");
  } catch (error) {
    // Log and respond with an error message in case of an exception
    console.error("Error making booking:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Endpoint to get the last booking
app.get("/api/booking", async (req, res) => {
  try {
    // Find the last booking in the database
    const lastBooking = await Booking.findOne().sort({ _id: -1 });

    // Respond with a message if no previous booking found, otherwise, send the last booking details
    if (!lastBooking) {
      res.status(200).json({ message: "No previous booking found" });
    } else {
      res.status(200).json(lastBooking);
    }
  } catch (error) {
    // Log and respond with an error message in case of an exception
    console.error("Error fetching last booking:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
