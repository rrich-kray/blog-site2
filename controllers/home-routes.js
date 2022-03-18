const Post = require("../models/Post");
const User = require("../models/User");
const sequelize = require("../config/connection");
const router = require("express").Router();

// Get all posts, including username and comments
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["title"],
    include: {
      model: "user",
      attributes: ["username"],
      include: {
        model: "comments",
        attributes: ["content", "user_id", "post_id"],
      },
    },
  }).then((postData) => {
    const posts = postData.map(postData.get({ plain: true }));
    res.render("homepage", posts);
  });
});

// get single post
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: "user",
      attributes: ["username"],
      include: {
        model: "comments",
        attributes: ["content", "user_id", "post_id"],
      },
    },
  }).then((response) => {
    const post = response.get({ plain: true });
    res.render("single-post", post);
  });
});

module.exports = router;
