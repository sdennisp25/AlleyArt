const router = require("express").Router();
const artController = require("../../controllers/artController");

router.route("/home")
	.get(artController.findAll)
	// .post(dbController.create);

router
	.route("/:id")
	.get(artController.findById)
	.put(artController.update)
	.delete(artController.remove);

module.exports = router;
