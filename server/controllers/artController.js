const db = require("../models");

module.exports = {
	searchArtist: function (req, res) {

		console.log("FIND ALL WHERE: ", req.params);
			db.Artwork
			.find(req.params)
			.then(art => res.json(art))
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Artwork
			.findById(req.params.id)
			.then(art => res.json(art))
			.catch(err => res.status(422).json(err));
	},
	create: function (req, res) {
		db.Artwork
			.create(req.body)
			.then(art => res.json(art))
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Artwork
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(art => res.json(art))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Artwork
			.findById({ _id: req.params.id })
			.then(art => art.remove())
			.then(art => res.json(art))
			.catch(err => res.status(422).json(err));
	}
};
