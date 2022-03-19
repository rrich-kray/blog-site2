const router = require("express").Router();

router.use("/posts", require("./post-routes.js"));
router.use("/users", require("./user-routes"));
router.use("/comments", require("./comment-routes"));

module.exports = router;
