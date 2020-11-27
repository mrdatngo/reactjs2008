import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "../reducers";

let store = createStore(
    authReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
