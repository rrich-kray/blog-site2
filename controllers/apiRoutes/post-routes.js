const router = require("express").Router();
const { Post } = require("../../models/Post");
const { body, validation } = require("express-validator");

router.get("/post");
