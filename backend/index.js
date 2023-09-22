const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const PORT = process.env.PORT;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect db");
  } catch (error) {
    throw error;
  }
};
app.listen(PORT, () => {
  connect();
  console.log(`${PORT} unda çalışıyor`);
});
