const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
	process.env.MONGODB_URI ||
	"mongodb://localhost/alleyart"
);

const artworkSeed = [
	{
		title: "The Last Dance",
		url: "https://cdn.pixabay.com/photo/2016/02/06/23/08/street-art-1183812__340.jpg",
		artist: "Art1",
		city: "Salt Lake City",
		state: "UT"
	},
	{
		title: "No More War",
		url: "https://cdn.pixabay.com/photo/2014/11/13/13/45/peace-529380__340.jpg",
		artist: "Art1",
		city: "Salt Lake City",
		state: "UT"
	},
	{
		title: "A Bike",
		url: "https://cdn.pixabay.com/photo/2014/01/18/10/59/bike-247394__340.jpg",
		artist: "Art2",
		city: "Provo",
		state: "UT"
	}

];

db.Artwork
	.remove({})
	.then(() => db.Artwork.collection.insertMany(artworkSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error("ARTWORK COLLECTION ERROR ", err);
		process.exit(1);
	});
