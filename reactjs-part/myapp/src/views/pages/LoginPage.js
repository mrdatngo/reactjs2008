import React, { Component } from "react";
import auth from "../../apis/authen";
import "../../styles/pages/login.css";

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                username: "admin",
                password: "123456",
                remember: false,
                organization: "",
            },
        };
    }

    onValueChange = (event) => {
        // console.log(event.target.name, event.target.value);
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value,
            },
        });
    };

    onRememberChange = () => {
        this.setState({
            data: {
                ...this.state.data,
                remember: !this.state.data.remember,
            },
        });
    };

    submit = () => {
        const { data } = this.state;
        auth.login(data).then((result) => {
            console.log("result");
        });
    };

    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <form className={"login-form"}>
                <legend style={{ fontWeight: "bold" }}>Login</legend>
                <br />
                <label htmlFor="username">User name</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter user name"
                    value={data.username}
                    onChange={this.onValueChange}
                />
                <br />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password!"
                    value={data.password}
                    onChange={this.onValueChange}
                />
                <br />
                <label htmlFor="org">Organization</label>
                <input
                    type="text"
                    name="organization"
                    id="org"
                    placeholder="Enter Organaztion!"
                    value={data.organization}
                    onChange={this.onValueChange}
                />
                <br />
                <input
                    type="checkbox"
                    onChange={this.onRememberChange}
                    name="remember"
                    id="remember"
                />
                <label htmlFor="remember">Remember login for a month</label>
                <br />
                <input
                    onClick={this.submit}
                    className="submit"
                    type="button"
                    value="Login"
                />
            </form>
        );
    }
}

export default LoginPage;
