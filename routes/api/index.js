const router = require("express").Router();
const dbRoutes = require("./database");

router.use("/database", dbRoutes);

module.exports = router;
