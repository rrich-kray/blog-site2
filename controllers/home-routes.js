const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");
const sequelize = require("../config/connection");
const router = require("express").Router();
const { Op } = require("sequelize");

// Get all posts, including username and comments
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "created_at"],
    include: {
      model: User,
      attributes: ["username"],
    },
  })
    .then((postData) => {
      const posts = postData.map((post) => post.get({ plain: true })); // returns a plain object without all the extra 'stuff' in it
      res.render("homepage", { posts });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
});

// get single post
router.get("/post/:id", (req, res) => {
  // this is rendering correctly
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["title", "content", "created_at"],
    include: {
      model: User,
      attributes: ["username"],
      include: {
        model: Comment,
        attributes: ["content", "user_id", "post_id"],
      },
    },
  })
    .then((response) => {
      const post = response.get({ plain: true });
      res.render("single-post", post);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
});

// Search posts
router.get("/", (req, res) => {
  Post.findAll({
    where: {
      content: {
        [Op.like]: req.body.searchTerm,
      },
    },
  }).then((response) => {
    const results = response.map((result) => result.get({ plain: true }));
    res.render("homepage", { results });
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
