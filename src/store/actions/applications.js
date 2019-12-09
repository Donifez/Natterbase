import axios from "../../utils/axios";
import * as types from "./types";

export const loading = () => {
	return {
		type: types.LOADING
	};
};

export const getApplicationSuccess = applications => {
	return {
		type: types. GET_APPLICATIONS,
		applications
	};
};

export const errorOccured = error => {
	return {
		type: types.ERROR_OCCURED,
		error
	};
};

export const getApplication = () => {
	return dispatch => {
		dispatch(loading());
		axios
			.get("/get-applications")
			.then(res => {
                console.log(res);
				dispatch(getApplicationSuccess(res.applications));
			})
			.catch(err => dispatch(errorOccured(err)));
	};
};
