const AuthModels = require("../models/AuthModels");
const BlogModels = require("../models/BlogModels");

const addBlogs = async (req, res) => {
  const { title, description, image, user } = req.body;

  try {
    const createNewBlog = await BlogModels.create({
      title,
      description,
      image: req?.file?.filename,
      user,
    });
    if (createNewBlog) {
      return res.send(createNewBlog);
    }
  } catch (err) {
    throw err;
  }
};

const allBlog = async (req, res) => {
  const { user } = req.body;
  try {
    const getAllBlog = await BlogModels.find().populate("user");
    res.send(getAllBlog);
  } catch (error) {
    console.log(error);
  }
};

const blogUpdate = async (req, res) => {
  const { id } = req.params;
  const { title, description, userInfo } = req.body;
  const updates = {
    title,
    description,
    userInfo,
  };
  if (req.file) {
    const files = req.file.filename;
    updates.image = files;
  }
  try {
    const updateBlog = await BlogModels.findOneAndUpdate({ _id: id }, updates);
    console.log("update", updateBlog);
    res.status(200).json(updateBlog);
  } catch (err) {
    console.log(err);
  }
};

const selectBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const getSelectBlog = await BlogModels.findById(id).populate("user");
    res.send(getSelectBlog);
  } catch (err) {
    console.log(err);
  }
};

const userInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const info = await AuthModels.findById(id);
    res.send(info);
  } catch (err) {
    console.log(err);
  }
};
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const selectDeleteBlog = await BlogModels.findByIdAndDelete(id);
    res.send(selectDeleteBlog);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  addBlogs,
  allBlog,
  selectBlog,
  blogUpdate,
  userInfo,
  deleteBlog,
};
