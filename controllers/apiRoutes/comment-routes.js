const { Comment, Post } = require("../../models");
const { body, validationResult } = require("express-validator");
const User = require("../../models/User");
const router = require("express").Router();

// comment routes/

// get all comments
router.get("/", (req, res) => {
  Comment.findAll({
    attributes: ["content", "post_id", "user_id"],
    include: {
      model: User,
      attributes: ["username"],
    },
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: "No comments found" });
    });
});

// Get single comment
router.get("/:id", (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["content"],
    include: {
      model: User,
      attributes: ["username"],
    },
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
});

// create a comment
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

// update a comment
router.put("/:id", (req, res) => {
  Comment.update({
    where: {
      id: req.params.id,
    },
    content: req.body.content,
  })
    .then((response) => {
      window.prompt("Comment updated!");
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

// Delete a comment
router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((response) => {
      if (response.ok) window.prompt("Comment delted!");
    })
    .then((err) => {
      res.status(400).json({ message: err.message });
    });
});

module.exports = router;
