const router = require("express").Router();

router.use("/api", require("./apiRoutes"));
router.use("/", require("./home-routes"));

module.exports = router;
