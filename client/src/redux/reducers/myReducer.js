const USER_AUTH = "USER_AUTH";
const USER_LOGOUT = "USER_LOGOUT";
const NEW_IMAGE = "NEW_IMAGE"

const initialState = {
	loggedIn: false,
	username: " ",
	userId: " ",
	isArtist: false,
	image: ""
}

export default function reducer(state = initialState, action) {
	////////////NOTES////////////
	//return the entire state object (cannot update just one property...it will override the entire state)
	//an action type will call the related funtion, then state is updated based on the 2nd parameter
	switch (action.type) {
		case USER_AUTH:
			return Object.assign({}, state, { loggedIn: action.user.loggedIn, username: action.user.username, userId: action.user.userId, isArtist: action.user.isArtist })
		case NEW_IMAGE:
			return Object.assign({}, state, { image: action.image })
		case USER_LOGOUT:
			return Object.assign({}, state, { loggedIn: action.isLoggedIn })
		default:
			return state;
	}
}


export function logInUser(payload) {
	return {
		type: USER_AUTH,
		user: payload
	}
}

export function logOutUser() {
	return {
		type: USER_AUTH,
		isLoggedIn: false
	}
}

export function getImageUrl(image) {
	return {
		type: NEW_IMAGE,
		image: image
	}
}