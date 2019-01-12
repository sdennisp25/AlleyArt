import axios from 'axios';

export default {
	registerUser: function (userInfo){
		return axios.post("/api/database/register/", userInfo);
	},
	loginUser: function (loginInfo) {
		return axios.post("/api/auth/login", loginInfo);
	},
	logoutUser: function () {
		return axios.get("/api/auth/logout");
	},
	searchArt: function (search){
		return axios.get("/api/database/search/" + search);
	},
	updateLikes: function (_id){
		return axios.put("/api/database/" + _id);
	}

};

