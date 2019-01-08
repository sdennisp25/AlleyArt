import axios from 'axios';

export default {
	loginUser: function (loginInfo) {
		return axios.post("/api/auth/login", loginInfo);
	},
	logoutUser: function () {
		return axios.get("/api/auth/logout");
	},
	searchArt: function (search){
		return axios.get("/api/search", search)
	}

};

