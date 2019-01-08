const UPDATE_USER = "UPDATE_USER";
const USER_AUTH = "USER_AUTH";

const initialState = {
	loggedIn: false,
	artist: false,
}

export default function reducer (state = initialState, action){
	////////////NOTES////////////
	//return the entire state object (cannot update just one property...it will override the entire state)
	//an action type will call the related funtion, then state is updated based on the 2nd parameter
	switch(action.type){
		case UPDATE_USER: 
		return Object.assign({}, state, {artist: action.isArtist})
		case USER_AUTH:
		return Object.assign({}, state, {loggedIn: action.isLoggedIn})
		default: 
		return state;
	}
}

export function updateUser(){
	return{
		type: UPDATE_USER,
		isArtist: true
	}
}

export function logInUser(){
	return{
		type: USER_AUTH,
		isLoggedIn: true
	}
}