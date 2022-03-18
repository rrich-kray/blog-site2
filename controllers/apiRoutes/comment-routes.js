const { Comment, Post } = require("../../models");
const { body, validationResult } = require("express-validator");
const User = require("../../models/User");
const router = require("express").Router();

router.post("/", body("content").trim().escape(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ message: "Could not post content" });
  }

  Comment.create({
    content: req.body.content,
    user_id: req.session.user_id,
    post_id: req.body.post_id,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
});

module.exports = router;
