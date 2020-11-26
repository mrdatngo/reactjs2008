import React, { Component } from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";

import { login } from "../../actions/auth";
import { connect } from "react-redux";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { span: 24 },
};

class LoginPage extends Component {
    onFinish = (values) => {
        // console.log("Success:", values);
        // call actions login
        login(values);
    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    render() {
        return (
            <Card
                size="small"
                title="Login"
                style={{ width: 500, textAlign: "center", margin: "20px auto" }}
            >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                            {
                                validator: (_, value) => {
                                    if (value && value.length < 3) {
                                        return Promise.reject(
                                            "Name length must bigger than 3!"
                                        );
                                    }
                                    if (value && value.length > 24) {
                                        return Promise.reject(
                                            "Name length must smaller than 24!"
                                        );
                                    }
                                    return Promise.resolve();
                                },
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    {/* <Form.Item
                        {...tailLayout}
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}
                    <p>{this.props.message}</p>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    console.log("state: ", state);
    return {
        isLoggedIn: state.isLoggedIn,
        message: state.message,
    };
}

export default connect(mapStateToProps)(LoginPage);
