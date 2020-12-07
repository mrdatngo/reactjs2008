import { auth } from "../apis";
import { saveToken } from "../utils/localStorageHandler";
import * as type from "../const/ActionTypes";

export const login = (data) => (dispatch) => {
    dispatch({ type: type.LOGGIN });
    auth.login(data)
        .then((resp) => {
            console.log("resp: ", resp);
            dispatch({
                type: type.LOGGIN_SUCCESS,
                payload: { token: resp.data.token },
            });
            saveToken(resp.data.token);
            // window.location = "/";
        })
        .catch((err) => {
            // console.log("err: ", err);
            dispatch({ type: type.LOGGIN_FAILED });
        });
};
