const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

/**
 * Connects to the MongoDB database using the provided connection string.
 * @throws {Error} Throws an error if the MongoDB connection string is not found.
 */
async function connectToDatabase() {
  // Retrieve MongoDB connection string from environment variables
  const mongoURI = process.env.MONGODB_URI;

  // Check if MongoDB connection string is available
  if (!mongoURI) {
    throw new Error("MongoDB connection string not found in environment variables.");
  }

  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log a success message if the connection is established
    console.log("Connected to the database");
  } catch (error) {
    // Log an error message if there's an issue connecting to the database
    console.error("Error connecting to the database:", error.message);
  }
}

// Export the connectToDatabase function to make it accessible in other modules
module.exports = connectToDatabase;
