const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogModels = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    userInfo: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("blog", BlogModels);
