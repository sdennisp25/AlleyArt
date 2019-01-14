import axios from 'axios';

export default {
	registerUser: function (userInfo) {
		return axios.post("/api/database/register/", userInfo);
	},
	loginUser: function (loginInfo) {
		return axios.post("/api/auth/login", loginInfo);
	},
	logoutUser: function () {
		return axios.get("/api/auth/logout");
	},
	uploadImage: function (data) {
		console.log(data);
		return axios.post("/api/file/image-upload", data, {
			headers: { contentType: "application/x-www-form-urlencoded" }
		});
	},
	submitArt: function (data) {
		console.log(data);
		return axios.post('/api/database/new-art', data);
	},
	searchArt: function (search) {
		return axios.get("/api/database/search/" + search);
	},
	updateLikes: function (_id) {
		return axios.put("/api/database/" + _id);
	},
	addFavorites: function (artID) {
		return axios.post("/api/database/favorites/" + artID);
	},
	getFavorites: function () {
		return axios.get("/api/database/favorites");
	}
};

