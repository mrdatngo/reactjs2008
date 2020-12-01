import { users } from "../apis";

export const fetchUsers = (data) => (dispatch) => {
    dispatch({ type: "FETCH_USERS" });
    users
        .fetchUsers(data)
        .then((resp) => {
            console.log("resp: ", resp);
            dispatch({
                type: "FETCH_USERS_SUCCESS",
                // payload: { token: resp.data.token },
            });
        })
        .catch((err) => {
            // console.log("err: ", err);
            dispatch({ type: "FETCH_USERS_FAILED" });
        });
};
