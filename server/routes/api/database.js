const router = require("express").Router();
const dbController = require("../../controllers/dbController");

///UNCOMMENTING UNTIL FINISHED W/ SETUP - WILL NEED TO ADD BACK///
var authCheck = function (req, res, next) {
	if (!req.user) {
		res.status(401).send()
		res.redirect('/');
	} else {
		next();
	}
}

router
	.get("/search/artist/:artist", authCheck, dbController.searchArtist)
	.get("/search/city/:city", authCheck, dbController.searchCity)
	.get("/favorites/", authCheck, dbController.getFavorites)
	.get("/profile/:artistID", authCheck, dbController.viewArtist)
	.get("/location/:_id", authCheck, dbController.getLatLng)

	.post("/register/", dbController.registerUser)
	.post("/new-art", authCheck, dbController.submitArt)
	.post("/favorites/:artID", authCheck, dbController.addFavorites)

	.put("/:_id", authCheck, dbController.incLikes)



// router
// 	.route("/:_id")
// 	.put(dbController.incLikes)
// 	.get(dbController.findById)
// 	.delete(db.remove);

module.exports = router;
