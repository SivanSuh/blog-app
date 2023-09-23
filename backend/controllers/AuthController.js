const AuthModels = require("../models/AuthModels");

const register = async (req, res) => {
  const { userName, image, email, password } = req.body;

  try {
    const user = await AuthModels.register(email, password, image, userName);
    console.log("users", user);
    res.status(200).json({
      email,
      userName,
      image,
    });
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AuthModels.login(email, password);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).json({
      hata: err.message,
    });
  }
};

module.exports = {
  register,
  login,
};
