// RUN MONGOD IN THE TERMINAL (IF SEED FILE DOESN'T AUTOPOPULATE - do this)
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
		"_id" : ObjectId("5c42ca9312cece38dcb05205"),
    "likes" : 0,
    "favoritedBy" : [],
    "artist" : "Beth",
    "artistID" : ObjectId("5c42c9b812cece38dcb05204"),
    "title" : "It's A Car!",
    "url" : "https://cdn.pixabay.com/photo/2015/04/29/09/28/graffiti-745071__340.jpg",
    "address" : "634 East 400 South",
    "city" : "Salt Lake City",
    "state" : "UT",
    "zipCode" : "84102",
    "lat" : 40.7596686,
    "lng" : -111.8726019,
    "formattedAddy" : "634+East+400+South+Salt+Lake+City+UT+84102",
    "description" : "in a wall...",
    "__v" : 0
		
	},
	{
		"_id" : ObjectId("5c42cab512cece38dcb05206"),
    "likes" : 1,
    "favoritedBy" : [ 
        ObjectId("5c42c9b812cece38dcb05204"), 
        ObjectId("5c42cc04d464c241b4097391")
    ],
    "artist" : "Beth",
    "artistID" : ObjectId("5c42c9b812cece38dcb05204"),
    "title" : "Factory Mirrors",
    "url" : "https://cdn.pixabay.com/photo/2018/12/09/17/57/hall-3865370__340.jpg",
    "address" : "1206 East 100 South Apt. 5",
    "city" : "SALT LAKE CITY",
    "state" : "Utah",
    "zipCode" : "84102",
    "lat" : 40.7668757,
    "lng" : -111.856253,
    "formattedAddy" : "1206+East+100+South+Apt.+5+SALT+LAKE+CITY+Utah+84102",
    "description" : "What can you see?",
    "__v" : 0
	},
	{
		"_id" : ObjectId("5c42cc23d464c241b4097392"),
    "likes" : 0,
    "favoritedBy" : [],
    "artist" : "Beth",
    "artistID" : ObjectId("5c42c9b812cece38dcb05204"),
    "title" : "Walkway",
    "url" : "https://cdn.pixabay.com/photo/2016/03/09/09/10/graffiti-1245654__340.jpg",
    "address" : "1402 Airport Road",
    "city" : "Bridgewater",
    "state" : "VA",
    "zipCode" : "22812",
    "lat" : 38.363237,
    "lng" : -78.961262,
    "formattedAddy" : "1402+Airport+Road+Bridgewater+VA+22812",
    "description" : "Take a stroll",
    "__v" : 0
	},
	{
		"_id" : ObjectId("5c42cc34d464c241b4097393"),
    "likes" : 0,
    "favoritedBy" : [],
    "artist" : "Beth",
    "artistID" : ObjectId("5c42c9b812cece38dcb05204"),
    "title" : "Around the corner",
    "url" : "https://cdn.pixabay.com/photo/2015/10/01/05/04/graffiti-966463__340.jpg",
    "address" : "135 W Market St",
    "city" : "Harrisonburg",
    "state" : "VA",
    "zipCode" : "22801",
    "lat" : 38.449538,
    "lng" : -78.8714823,
    "formattedAddy" : "135+W+Market+St+Harrisonburg+VA+22801",
    "description" : "another bend",
    "__v" : 0
	}
];

//////////////////////USERS//////////////
const userSeed =[
{
	"_id" : ObjectId("5c42c9b812cece38dcb05204"),
	"isArtist" : true,
	"okToContact" : true,
	"artwork" : [ 
			ObjectId("5c42ca9312cece38dcb05205"), 
			ObjectId("5c42cab512cece38dcb05206"), 
			ObjectId("5c42cc23d464c241b4097392"), 
			ObjectId("5c42cc34d464c241b4097393")
	],
	"username" : "Beth",
	"email" : "beth@email.com",
	"password" : "$2a$10$9I1fPtmmQa8HYC2Tr4sZse5CCpjLK0s5Fj4LbgTtdZY4CkhiUm7WO",
	"aboutArtist" : "Elementary my dear Watson what a load of cobblers Queen Elizabeth, grub's up jolly clock round the earhole chips River Song a right toff lost her marbles The Doctor, alright geezer Geordie squirrel driving a mini manky picalilly. Bog roll chippy damn it's nicked beefeater have a kip Doctor Who off the hook, Dr. Watson by 'eck love in the goolies Essex girls Kate and Will.",
	"__v" : 0
},
{
	"_id" : ObjectId("5c42cc04d464c241b4097391"),
	"isArtist" : true,
	"okToContact" : false,
	"artwork" : [],
	"username" : "Mary",
	"email" : "mary@email.com",
	"password" : "$2a$10$0mFrSs.hri1XQmL6x46P1OZxyc.N01hFLeMTs3MaqGVSSeukvEgIO",
	"aboutArtist" : "street art williamsburg church-key banh mi polaroid taxidermy, knausgaard pok pok 3 wolf moon cardigan succulents scenester ramps swag meh. Pug bespoke vinyl, direct trade drinking vinegar austin green juice wolf post-ironic gochujang fanny pack deep v try-hard master cleanse typewriter. ",
	"__v" : 0
}
]