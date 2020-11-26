const initialState = {
    isLoggedIn: false,
    token: "",
    message: "",
};

export default function authReducer(state = initialState, action = {}) {
    console.log("ACTION: ", action);
    switch (action.type) {
        case "LOGGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                message: "Logged in success",
            };
        case "LOGGIN_FAILED":
            return {
                ...state,
                isLoggedIn: false,
                message: "Logged in failed",
            };
    }
    return state;
}
