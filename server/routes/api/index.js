const router = require("express").Router();
const dbRoutes = require("./database");
const authRoutes = require('./auth-routes');

router.use("/database", dbRoutes);
router.use("/auth", authRoutes);

module.exports = router;
