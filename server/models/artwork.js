const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
	title: { type: String, required: true },
	url: { type: String, required: true },
	artist: { type: String, required: true },
	artistID: { type: String, required: true },
	address: { type: String},
	city: { type: String},
	state: { type: String},
	zipCode: { type: String},
	lat: { type: Number, required: true },
	lng:{ type: Number, required: true },
	description: { type: String },
	likes: { type: Number, default: 0 },
	favoritedBy: [{
		type: Schema.Types.ObjectId,
		ref: "User"
	}]
	// comments: [{ body: String, date: Date }],
});

const Artwork = mongoose.model("Artwork", artworkSchema);

module.exports = Artwork;