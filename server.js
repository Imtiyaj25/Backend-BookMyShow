// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToDatabase = require("./connection");
const Booking = require("./schema");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
connectToDatabase();

// Endpoint to make a booking
app.post("/api/booking", async (req, res) => {
  try {
    const { movie, seats, slot } = req.body;
    const booking = new Booking({ movie, seats, slot });
    await booking.save();
    res.status(200).send("Booking successful");
  } catch (error) {
    console.error("Error making booking:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Endpoint to get the last booking
app.get("/api/booking", async (req, res) => {
  try {
    const lastBooking = await Booking.findOne().sort({ _id: -1 });
    if (!lastBooking) {
      res.status(200).json({ message: "no previous booking found" });
    } else {
      res.status(200).json(lastBooking);
    }
  } catch (error) {
    console.error("Error fetching last booking:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
