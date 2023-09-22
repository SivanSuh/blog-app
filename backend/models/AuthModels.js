const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthModels = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9csWZpVBMhOfyKFkkY_rI_1A58cE9j1xxT6wzhkjZ0Vq1PewcBtK8mCzWj3EFHQxIKg&usqp=CAU",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", AuthModels);
