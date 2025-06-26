const express = require("express");
const { createBlog, getAllBlogs,getASingleBlog,updateABlog } = require("../controllers/blog.controllers");

const router = express.Router();

router.route("/create").post(createBlog);
router.route("/getAllBlogs").get(getAllBlogs);
router.route("/getASingleBlog/:id").get(getASingleBlog);
router.route("/updateABlog/:id").put(updateABlog);

module.exports = router;
