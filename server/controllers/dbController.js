const db = require("../models");

module.exports = {

	registerUser: function (req, res) {
		console.log("REGISTER USER REQUESTED", req.body);
		let username = req.body.username;
		let email = req.body.email;
		let password = req.body.password;
		console.log("TEST USER VARIABLES: username", username);
		console.log("TEST USER VARIABLES: email", email);
		console.log("TEST USER VARIABLES: password", password);
		db.User
			.create(req.body)
			.then(newUser => {
				res.json(newUser);
			})
			.catch(err => res.status(422).json(err));
	},

	submitArt: function (req, res) {
		console.log("SUBMITTING NEW ART", req.body);
		db.Artwork
			.create(req.body)
			.then(art => res.json(art))
			.catch(err => res.status(422).json(err));
	},

	searchArtist: function (req, res) {
		console.log("FIND ALL WHERE: ", req.params.artist);
		let query = req.params.artist;
		db.Artwork
			.find({ artist: { $regex: query, $options: 'i' } })
			.then(art => res.json(art))
			.catch(err => res.status(422).json(err));
	},

	incLikes: function (req, res) {
		console.log("INCREASING LIKES", req.params);
		db.Artwork
			.findOneAndUpdate((req.params), { $inc: { likes: 1 } }, { new: true })
			.then(art => res.json(art))
			.catch(err => res.status(422).json(err));
	},

	addFavorites: function (req, res) {
		console.log("ADDING TO FAVORITES", req.params);
		let userId = req.user.id;
		let artId = req.params.artID
		console.log("FAVORITE ART ID: ", req.params.artID);
		console.log("FAVORITE USER ID: ", userId);
		db.Artwork.findOneAndUpdate({ _id: artId }, {
			$push: {
				favoritedBy: [userId]
			}
		}, { new: true })
			.then(dbFav => res.json(dbFav))
			.catch(err => res.status(422).json(err));
	},

	getFavorites: function (req, res) {
		console.log("RETREIVEING USER FAVORITES")
		let userId = req.user.id;
		console.log("GET USER FAVS ID: ", userId);

		db.Artwork.find({ favoritedBy: { $in: userId } })
			.then(function (dbFav) {
				res.json(dbFav);
			})
			.catch(function (err) {
				res.json(err);
			});
	}

	/////////////////OTHER FUNCTIONS - MAY STILL NEED/////////////////
	// findById: function (req, res) {
	// 	db.Artwork
	// 		.findById(req.params.id)
	// 		.then(art => res.json(art))
	// 		.catch(err => res.status(422).json(err));
	// },
	// create: function (req, res) {
	// 	db.Artwork
	// 		.create(req.body)
	// 		.then(art => res.json(art))
	// 		.catch(err => res.status(422).json(err));
	// },
	// update: function (req, res) {
	// 	db.Artwork
	// 		.findOneAndUpdate({ _id: req.params.id }, req.body)
	// 		.then(art => res.json(art))
	// 		.catch(err => res.status(422).json(err));
	// },
	// remove: function (req, res) {
	// 	db.Artwork
	// 		.findById({ _id: req.params.id })
	// 		.then(art => art.remove())
	// 		.then(art => res.json(art))
	// 		.catch(err => res.status(422).json(err));
	// }
};
