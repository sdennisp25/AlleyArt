// RUN MONGOD IN THE TERMINAL
//OPEN ROBO and go to the alleyArt DB
//Right click to add a collection
//Title collection "artworks"
//Once added. Right click on the collection and update document
//copy each objects and save

// const mongoose = require("mongoose");
// const db = require("../models");

// mongoose.connect(
// 	process.env.MONGODB_URI ||
// 	"mongodb://localhost/alleyart"
// );

const artworkSeed = [
	{
		title: "The Last Dance",
		url: "https://cdn.pixabay.com/photo/2016/02/06/23/08/street-art-1183812__340.jpg",
		artist: "Art1",
		city: "Salt Lake City",
		state: "UT",
		likes: 0
	},
	{
		title: "No More War",
		url: "https://cdn.pixabay.com/photo/2014/11/13/13/45/peace-529380__340.jpg",
		artist: "Art1",
		city: "Salt Lake City",
		state: "UT",
		likes: 0
	},
	{
		title: "A Bike",
		url: "https://cdn.pixabay.com/photo/2014/01/18/10/59/bike-247394__340.jpg",
		artist: "Art2",
		city: "Provo",
		state: "UT",
		likes: 0
	}

];

// db.Artwork
// 	.remove({})
// 	.then(() => db.Artwork.collection.insertMany(artworkSeed))
// 	.then(data => {
// 		console.log(data.result.n + " records inserted!");
// 		process.exit(0);
// 	})
// 	.catch(err => {
// 		console.error(err);
// 		process.exit(1);
// 	});


