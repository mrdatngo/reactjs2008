import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "antd/dist/antd.css";
import jwt from "jsonwebtoken";
import axios from "axios";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { getToken } from "./utils/localStorageHandler";

var token = getToken();
if (token) {
    const data = jwt.decode(token);
    const now = new Date().getTime() / 1000; // convert to timestamp in seconds
    if (data.exp > now) {
        store.dispatch({
            type: "LOGGIN_SUCCESS",
            payload: { token, username: data.username },
        });
        axios.defaults.headers.common.authorization = `Bearer ${token}`;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
