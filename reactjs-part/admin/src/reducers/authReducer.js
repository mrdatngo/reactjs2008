const initialState = {
    isLoggedIn: false,
    token: "",
};

export default function authReducer(state = initialState, action = {}) {
    console.log("ACTION: ", action);
    return state;
}
