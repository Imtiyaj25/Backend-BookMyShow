// schema.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  movie: String,
  seats: Object,
  slot: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
