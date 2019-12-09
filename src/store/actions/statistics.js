import axios from "../../utils/axios";
import * as types from "./types";

export const loading = () => {
	return {
		type: types.LOADING
	};
};

export const getStatisticSuccess = statistics => {
	return {
		type: types. GET_STATISTICS,
		statistics
	};
};

export const errorOccured = error => {
	return {
		type: types.ERROR_OCCURED,
		error
	};
};

export const getStatistic = () => {
	return dispatch => {
		dispatch(loading());
		axios
			.get("/get-statistics")
			.then(res => {
                console.log(res);
				dispatch(getStatisticSuccess(res.statistics));
			})
			.catch(err => dispatch(errorOccured(err)));
	};
};
