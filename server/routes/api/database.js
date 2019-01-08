const router = require("express").Router();
const artController = require("../../controllers/artController");

router
	.get("/search/:artist", artController.searchArtist)
	// .post(dbController.create);

router
	.route("/:id")
	.get(artController.findById)
	.put(artController.update)
	.delete(artController.remove);

module.exports = router;
