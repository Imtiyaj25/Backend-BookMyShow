// connection.js
const mongoose = require("mongoose");

async function connectToDatabase() {
  await mongoose.connect("mongodb+srv://imsayyad97:bI5UcloPFmoEFzly@cluster0.2xxbflz.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to the database");
}

module.exports = connectToDatabase;
