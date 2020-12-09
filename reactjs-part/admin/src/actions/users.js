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
            // console.log("resp: ", resp);
            dispatch({
                type: type.ADD_USER_SUCCESS,
                payload: {
                    message: "Add user success!",
                },
            });
        })
        .catch((err) => {
            // console.log("err: ", err);
            dispatch({
                type: type.ADD_USER_FAILED,
                payload: {
                    message: "Add user failed",
                },
            });
        });
};
