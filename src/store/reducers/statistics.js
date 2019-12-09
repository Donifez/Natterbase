import * as types from "../actions/types";

const initialState = {
	statistics: [],
	isLoading: false,
	statisticSuccess:false,
	error: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

        case types.LOADING:
			return {
				...state,
				isLoading: true
            };
            

		case types.GET_STATISTICS:
			return {
				...state,
				statistics: action.statistics,
				isLoading: false
            };
            
	
		case types.ERROR_OCCURED:
			return {
				...state,
				isLoading: false,
				error: action.error
			};
		default:
			return state;
	}
};

export default reducer;