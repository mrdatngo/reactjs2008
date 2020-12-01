import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, isLoggedIn, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                return isLoggedIn ? (
                    children
                ) : (
                    <Redirect to={{ pathname: "/login" }} />
                );
            }}
        ></Route>
    );
};

function mapStateToProps({ auth }) {
    return {
        isLoggedIn: auth.isLoggedIn,
    };
}

export default connect(mapStateToProps)(PrivateRoute);
