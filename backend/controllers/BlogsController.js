const AuthModels = require("../models/AuthModels");
const BlogModels = require("../models/BlogModels");

const addBlogs = async (req, res) => {
  const { title, description, image, userInfo } = req.body;

  try {
    const createNewBlog = await BlogModels.create({
      title,
      description,
      image,
      userInfo,
    });
    if (createNewBlog) {
      res.send(createNewBlog);
    }
  } catch (err) {
    throw err;
  }
};

const allBlog = async (req, res) => {
  const { userInfo } = req.body;
  try {
    // const getUser = await AuthModels.findOne()
    //   .populate("userInfo", ["userName"])
    //   .exec();

    const getAllBlog = await BlogModels.find();
    res.send({
      getAllBlog,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addBlogs,
  allBlog,
};
