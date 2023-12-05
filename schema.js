// Import the Mongoose library
const mongoose = require("mongoose");

// Define the Mongoose schema for the Booking model
const bookingSchema = new mongoose.Schema({
  // Field for storing the movie title (String type)
  movie: String,

  // Field for storing seat details as an object
  // Example: { "Type1": 2, "Type2": 3 }
  seats: Object,

  // Field for storing the time slot (String type)
  slot: String,
});

// Create a Mongoose model named "Booking" based on the defined schema
const Booking = mongoose.model("Booking", bookingSchema);

// Export the Booking model to use it in other parts of the application
module.exports = Booking;
