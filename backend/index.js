const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const authRouter = require("./routes/AuthRouter");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect db");
  } catch (error) {
    throw error;
  }
};

app.use("/auth", authRouter);

app.listen(PORT, () => {
  connect();
  console.log(`${PORT} unda çalışıyor`);
});
