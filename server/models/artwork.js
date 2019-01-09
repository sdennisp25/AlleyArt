const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
	title: { type: String, required: true },
	url: { type: String, required: true },
	artist: { type: String, required: true },
	city: {type: String, required: true },
	state: {type: String, required: true}
});

const Artwork = mongoose.model("Artwork", artworkSchema);

module.exports = Artwork;