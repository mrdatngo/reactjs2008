import { combineReducers } from "redux";

import authReducer from "./authReducer";
import userReducers from "./userReducer";

const reducers = combineReducers({
    auth: authReducer,
    users: userReducers,
});

export default reducers;
