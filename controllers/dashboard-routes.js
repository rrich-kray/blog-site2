const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const auth = require("../utils/auth");

// Get all of user's posts/comments
router.get("/", auth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id, // need withAuth function here, or accessing dashboard while logged out returns error
    },
    attributes: ["id", "title", "created_at"],
    include: {
      model: User,
      attributes: ["username", "bio"],
    },
  }).then((response) => {
    const posts = response.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("dashboard", {
      posts,
      loggedIn: true,
    });
  });
});

module.exports = router;
