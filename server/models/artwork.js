const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
	title: { type: String, required: true },
	url: { type: String, required: true },
	artist: { type: String, required: true },
	artistID: {type: String, required: true},
	address: {type: String, required: true},
	city: {type: String, required: true },
	state: {type: String, required: true},
	zipCode: {type: String, required: true},
	description: {type: String}, 
	likes: {type: Number, default: 0},
	// comments: [{ body: String, date: Date }],
});

const Artwork = mongoose.model("Artwork", artworkSchema);

module.exports = Artwork;