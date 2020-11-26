import { auth } from "../apis";

import store from "../store";

export const login = (data) => {
    console.log("starting login action");
    auth.login(data)
        .then((resp) => {
            console.log("resp: ", resp);
            // dispatch to store
            store.dispatch({ type: "LOGGIN_SUCCESS" });
        })
        .catch((err) => {
            console.log("err: ", err);
            // dispatch to store
            store.dispatch({ type: "LOGGIN_FAILED" });
        });
};
