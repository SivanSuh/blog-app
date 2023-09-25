const express = require("express");
const { addBlogs, allBlog } = require("../controllers/BlogsController");
const router = express.Router();

router.post("/addBlog", addBlogs);
router.get("/allBlog", allBlog);

module.exports = router;
