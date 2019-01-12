const router = require("express").Router();
const dbController = require("../../controllers/dbController");

router
	.get("/search/:artist", dbController.searchArtist)

router
	.post("/register/", dbController.registerUser)
	

router
	.route("/:_id")
	.put(dbController.incLikes)
// 	.get(dbController.findById)
// 	.delete(db.remove);

module.exports = router;
