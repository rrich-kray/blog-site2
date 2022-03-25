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
router.post("/posts", (req, res) => {
  Post.findAll({
    where: {
      // this is not working
      content: {
        [Op.like]: req.body.searchTerm,
      },
    },
  }).then((response) => {
    console.log(response); // not returning a response
    const results = response.map((result) => result.get({ plain: true }));
    res.render("homepage", {
      results,
      loggedIn: req.session.loggedIn,
    });
  });
});

router.get("/login", (req, res) => {
  res.render("login", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/signup", (req, res) => {
  res.render("signup", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/add-post", (req, res) => {
  res.render("add-post", {
    loggedIn: req.session.loggedIn,
  });
});

// modify route to send data
// click the link, sends get request to render edit post, sends post id along with it, then data from that page is sent to api route.
router.get("/edit-post/:id", (req, res) => {
  res.render("edit-post", { loggedIn: true });
});

module.exports = router;
