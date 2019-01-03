const UPDATE_TEST = "UPDATE_TEST";

const initialState = {
	test: 'I am a test'
}

export default function reducer(state = initialState, action) {
  switch(action.type){

    case UPDATE_TEST:
      return Object.assign({}, state, {test: action.payload})

    default:
      return state;
    }
}

export function updateTest(e) {
	let payload = e.target.value
	return {
			type: UPDATE_TEST,
			payload: payload
	}
}