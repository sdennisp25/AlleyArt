const router = require("express").Router();
const dbController = require("../../controllers/dbController");

///UNCOMMENTING UNTIL FINISHED W/ SETUP - WILL NEED TO ADD BACK///
// var authCheck = function (req, res, next) {
// 	if (!req.user) {
// 		res.status(401).send()
// 		res.redirect('/');
// 	} else {
// 		next();
// 	}
// }

router
	.get("/search/artist/:artist", dbController.searchArtist)
	.get("/search/city/:city", dbController.searchCity)

	.post("/register/", dbController.registerUser)
	.post("/new-art", dbController.submitArt)

	.post("/favorites/:artID", dbController.addFavorites)
	.get("/favorites/", dbController.getFavorites)

	.get("/profile/:artistID", dbController.viewArtist)

	.get("/location/:_id", dbController.getLatLng)

router
	.route("/:_id")
	.put(dbController.incLikes)
// 	.get(dbController.findById)
// 	.delete(db.remove);

module.exports = router;
