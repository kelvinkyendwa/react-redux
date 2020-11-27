import { FETCH_POSTS, NEW_POST } from "../actions/types";
//define the switch statement
//evaluate action type using a switch that are committed

const initialState = {
	items: [],
	item: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				items: action.payload,
			};
		case NEW_POST:
			return {
				...state,
				item: action.payload,
			};
		default:
			return state;
	}
}
