// RUN MONGOD IN THE TERMINAL (IF SEED FILE DOESN'T AUTOPOPULATE - do this)
//OPEN ROBO and go to the alleyArt DB
//Right click to add a collection
//Title collection "artworks"
//Once added. Right click on the collection and update document
//copy each objects and save

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
		artist: "Beth",
		artistID: "5c3592a50de92851347d10eb",
		address: "2100 East 100 South",
		city: "Salt Lake City",
		state: "UT",
		zipCode: "84112",
		description: "A Couple Dancing"
		
	},
	{
		title: "No More War",
		url: "https://cdn.pixabay.com/photo/2014/11/13/13/45/peace-529380__340.jpg",
		artist: "Beth",
		artistID: "5c3592a50de92851347d10eb",
		address: "1500 East 100 South",
		city: "Salt Lake City",
		state: "UT",
		zipCode: "84112",
		description: "Peace Please"
	},
	{
		title: "A Bike",
		url: "https://cdn.pixabay.com/photo/2014/01/18/10/59/bike-247394__340.jpg",
		artist: "Mary",
		artistID: "5c3578ba7e1eee53101669ae",
		address: "1500 East 100 South",
		city: "Salt Lake City",
		state: "UT",
		zipCode: "84112",
		description: "Ride a Bike"
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
		console.error(err);
		process.exit(1);
	});


