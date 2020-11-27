import { auth } from "../apis";
import { saveToken } from "../utils/localStorageHandler";

export const login = (data) => (dispatch) => {
    dispatch({ type: "LOGGIN" });
    auth.login(data)
        .then((resp) => {
            console.log("resp: ", resp);
            dispatch({
                type: "LOGGIN_SUCCESS",
                payload: { token: resp.data.token },
            });
            saveToken(resp.data.token);
            window.location = "/";
        })
        .catch((err) => {
            // console.log("err: ", err);
            dispatch({ type: "LOGGIN_FAILED" });
        });
};
