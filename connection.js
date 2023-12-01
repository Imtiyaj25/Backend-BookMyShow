// // connection.js
// const mongoose = require("mongoose");

// async function connectToDatabase() {
//   await mongoose.connect("mongodb+srv://imsayyad97:bI5UcloPFmoEFzly@cluster0.2xxbflz.mongodb.net/?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("Connected to the database");
// }

// module.exports = connectToDatabase;


// New Code Goes From Here


const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

async function connectToDatabase() {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error("MongoDB connection string not found in environment variables.");
  }

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
}

module.exports = connectToDatabase;