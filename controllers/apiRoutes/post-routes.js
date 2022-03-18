const router = require("express").Router();
const { Post } = require("../../models/Post");
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("title").exists().isLength({ min: 1 }).trim().escape(),
    body("content").exists().isLength({ min: 1 }).escape(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Post was unsuccessful");
      Promise.reject("Post was unsuccessful");
    }

    Post.create({
      title: req.body.title,
      content: req.body.content,
      created_at: req.body.created_at,
    })
      .then((response) => {
        console.log("post was successful!");
      })
      .catch((err) => res.status(400).json({ message: err }));
  }
);

module.exports = router;
