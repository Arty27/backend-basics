const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connect to Database successfully!");
  } catch (error) {
    console.log("Failed to connect to Database!", error);
    process.exit(1);
  }
};

module.exports = connectToDb;
