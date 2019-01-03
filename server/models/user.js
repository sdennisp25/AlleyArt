const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({

	name: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	googleId: {
		type: String
	},
});

////COMPARE and HASH Passwords///
userSchema.methods.comparePassword = function comparePassword(password, callback) {
	bcrypt.compare(password, this.password, callback);
};
userSchema.pre('save', function saveHook(next) {
	const user = this;
	if (!user.isModified('password')) return next();
	return bcrypt.genSalt((saltError, salt) => {
		if (saltError) {
			return next(saltError);
		}
		return bcrypt.hash(user.password, salt, (hashError, hash) => {
			if (hashError) {
				return next(hashError);
			}
			user.password = hash;
			return next();
		});
	});
});
const User = mongoose.model("User", userSchema);

module.exports = User;