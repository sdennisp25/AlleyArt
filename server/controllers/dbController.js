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

	searchArtist: function (req, res) {
		console.log("FIND ALL WHERE: ", req.params);
		db.Artwork
			.find(req.params)
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
