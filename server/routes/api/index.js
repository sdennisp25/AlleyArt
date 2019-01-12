const router = require("express").Router();
const dbRoutes = require("./database");
const authRoutes = require('./auth-routes');
const fileUploadRoutes = require('./file-uploader');


router.use("/database", dbRoutes);
router.use("/auth", authRoutes);
router.use("/file", fileUploadRoutes);


module.exports = router;
