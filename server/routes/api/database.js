const router = require("express").Router();
const dbController = require("../../controllers/dbController");

router
	.get("/search/:artist", dbController.searchArtist)

router
	.post("/register/", dbController.registerUser)
	

// router
// 	.route("/:id")
// 	.get(dbController.findById)
// 	.put(dbController.update)
// 	.delete(db.remove);

module.exports = router;
