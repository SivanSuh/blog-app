const express = require("express");
const {
  addBlogs,
  allBlog,
  selectBlog,
  blogUpdate,
  selectUser,
  userInfo,
} = require("../controllers/BlogsController");
const multerConfig = require("../config/fileUpload");
const router = express.Router();

router.post("/addBlog", multerConfig.single("image"), addBlogs);
router.get("/allBlog", allBlog);
router.post("/allBlog/:id", selectBlog);
router.put("/allBlog/:id", multerConfig.single("image"), blogUpdate);
router.post("/userInfo/:id", userInfo);

module.exports = router;
