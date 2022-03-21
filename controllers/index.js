const router = require("express").Router();

router.use("/api", require("./apiRoutes"));
router.use("/", require("./home-routes"));
router.use("/dashboard", require("./dashboard-routes"));

module.exports = router;
