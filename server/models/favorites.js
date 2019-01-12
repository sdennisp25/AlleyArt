const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favsSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	}

});

const Favorite = mongoose.model("Favorite", favsSchema);

module.exports = Favorite;