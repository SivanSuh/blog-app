const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const AuthModels = new Schema(
  {
    userName: {
      type: String,
      required: true,
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

AuthModels.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Alanlar boş geçilemez");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Email bulunamadı");
  }
  const passwordControl = await bcrypt.compare(password, user.password);
  if (!passwordControl) {
    throw Error("Hatalı parola girdiniz");
  }
  return user;
};

AuthModels.statics.register = async function (email, password, userName) {
  if (!email || !password || !userName) {
    throw Error(" Register Alanları boş geçilemez");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email kurallara uygun degil");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("parola güçlü değil");
  }
  const controlUser = await this.findOne({ email });

  if (controlUser) {
    throw Error("Email Mevcut");
  }
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash(password, salt);

  //const passwordControl = await bcrypt.compare(password, confirmPassword);
  // if (!passwordControl) {
  //   throw Error("Paralolar Eşleşmiyor");
  // }

  const user = await this.create({
    email,
    password: pass,
    userName,
  });
  return user;
};
module.exports = mongoose.model("user", AuthModels);
