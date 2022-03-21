const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");
const sequelize = require("../config/connection");
const router = require("express").Router();
const { Op } = require("sequelize");

// Get all posts, including username and comments
router.get("/", (req, res) => {
  console.log(req.session); // this is console logging. there is a session
  Post.findAll({
    attributes: ["id", "title", "created_at"],
    include: {
      model: User,
      attributes: ["username"],
    },
  })
    .then((postData) => {
      const posts = postData.map((post) => post.get({ plain: true })); // returns a plain object without all the extra 'stuff' in it
      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
});

// get single post
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["title", "image_url", "content", "created_at"],
    include: {
      model: Comment,
      attributes: ["content"],
      include: {
        model: User,
        attributes: ["username"],
      },
    },
  })
    .then((response) => {
      const post = response.get({ plain: true });
      console.log(post);
      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn,
      });
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
    res.render("homepage", {
      results,
      loggedIn: req.session.loggedIn,
    });
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
