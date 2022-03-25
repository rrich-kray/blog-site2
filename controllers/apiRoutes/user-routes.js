const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const { body, validationResult } = require("express-validator");

// file contains routes for creating, deleting and logging in/out users

// get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: [{ exclude: "password" }],
  })
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: "No users found" });
    });
});

// Return a single user
router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: "post",
      attributes: ["title"],
    },
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: "User not found" });
    });
});

router.post(
  "/",
  body("username").isLength({ min: 1 }).escape(),
  body("password").isLength({ min: 5 }).escape(),
  body("email").isEmail().escape(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then((response) => {
        console.log(response);
        req.session.save(() => {
          req.session.user_id = response.id;
          req.session.username = response.username;
          req.session.loggedIn = true;

          res.json(response);
        });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  }
);

// login
router.post(
  "/login",
  body("username").escape(),
  body("password").escape(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ message: errors.array() });
    }
    User.findOne({
      where: {
        username: req.body.username,
      },
    }).then((loginData) => {
      if (!loginData) {
        res.json({ message: "User not found" });
        return;
      }

      req.session.save(() => {
        // initiate the creation of a session
        req.session.user_id = loginData.id;
        req.session.username = loginData.username;
        req.session.loggedIn = true;

        res.json(loginData);
      });
    });
  }
);

// log out
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(200).end();
  }
});

module.exports = router;
