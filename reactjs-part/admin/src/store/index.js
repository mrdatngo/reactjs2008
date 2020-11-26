import { createStore } from "redux";

import { authReducer } from "../reducers";

let store = createStore(authReducer);

export default store;
