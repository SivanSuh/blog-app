const express = require("express");
const {
  addBlogs,
  allBlog,
  selectBlog,
  blogUpdate,
  selectUser,
} = require("../controllers/BlogsController");
const router = express.Router();

router.post("/addBlog", addBlogs);
router.get("/allBlog", allBlog);
router.post("/allBlog/:id", selectBlog);
router.put("/allBlog/:id", blogUpdate);

module.exports = router;
