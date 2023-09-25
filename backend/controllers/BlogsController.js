const AuthModels = require("../models/AuthModels");
const BlogModels = require("../models/BlogModels");

const addBlogs = async (req, res) => {
  const { title, description, image, user } = req.body;

  try {
    const createNewBlog = await BlogModels.create({
      title,
      description,
      image,
      user,
    });
    if (createNewBlog) {
      res.send(createNewBlog);
    }
  } catch (err) {
    throw err;
  }
};

const allBlog = async (req, res) => {
  const { user } = req.body;
  try {
    // const getUser = await AuthModels.findOne()
    //   .populate("user", ["userName"])
    //   .exec();

    const getAllBlog = await BlogModels.find().populate("user");
    res.send(getAllBlog);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addBlogs,
  allBlog,
};
