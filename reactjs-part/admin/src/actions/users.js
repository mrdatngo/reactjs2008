import { users } from "../apis";
import * as type from "../const/ActionTypes";

export const fetchUsers = (data) => (dispatch) => {
    dispatch({ type: type.FETCH_USERS });
    users
        .fetchUsers(data)
        .then((resp) => {
            // console.log("resp: ", resp);
            dispatch({
                type: type.FETCH_USERS_SUCCESS,
                payload: { users: resp.data.data, total: resp.data.total },
            });
        })
        .catch((err) => {
            // console.log("err: ", err);
            dispatch({ type: type.FETCH_USERS_FAILED });
        });
};

export const addUser = (data) => (dispatch) => {
    dispatch({ type: type.ADD_USER });
    users
        .addUser(data)
        .then((resp) => {
            if (resp.data && resp.data.success && resp.data.message) {
                dispatch({
                    type: type.ADD_USER_SUCCESS,
                    payload: {
                        message: resp.data.message,
                    },
                });
            } else {
                dispatch({
                    type: type.ADD_USER_FAILED,
                    payload: {
                        message: "Something went wrong!",
                    },
                });
            }
        })
        .catch((err) => {
            console.log("err: ", err.response);
            let message = "Add user failed";
            if (err.response && err.response.statusText) {
                message = err.response.statusText;
            }
            dispatch({
                type: type.ADD_USER_FAILED,
                payload: {
                    message,
                },
            });
        });
};

export const getUser = (id) => (dispatch) => {
    dispatch({ type: type.GET_USER });
    users
        .getUser(id)
        .then((resp) => {
            console.log(resp);
            if (resp.data && resp.data.success) {
                dispatch({
                    type: type.GET_USER_SUCCESS,
                    payload: {
                        user: resp.data.user,
                    },
                });
            } else {
                dispatch({
                    type: type.GET_USER_FAILED,
                    payload: {
                        message: "Something went wrong!",
                    },
                });
            }
        })
        .catch((err) => {
            console.log("err: ", err.response);
            let message = "Add user failed";
            if (err.response && err.response.statusText) {
                message = err.response.statusText;
            }
            dispatch({
                type: type.GET_USER_FAILED,
                payload: {
                    message,
                },
            });
        });
};
