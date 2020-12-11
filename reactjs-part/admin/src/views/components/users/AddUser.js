import React, { useState, useEffect } from "react";
import { Form, Row, Col, Input, Button, Typography } from "antd";
import { useFormInput } from "../../../utils/hooks";
import { connect } from "react-redux";
import { addUser, getUser } from "../../../actions/users";
import { useParams } from "react-router-dom";

const { Text } = Typography;

function AddUser({ addUser, addUserState, getUser, getUserState }) {
    const [id, setId] = useFormInput("");
    const [name, setName] = useFormInput("");
    const [className, setClassName] = useFormInput("");

    const params = useParams();

    useEffect(() => {
        console.log("params: ", params);
        getUser(params.id);
    }, []);

    useEffect(() => {
        console.log(getUserState);
        if (getUserState.success) {
            let { user } = getUserState;
            setId({ target: { value: user.id } });
            setName({ target: { value: user.name } });
            setClassName({ target: { value: user.class } });
        }
    }, [getUserState.success]);

    const submit = () => {
        if (params.id) {
            // create update user actions, create api, tao reducer
            // updateUser({});
        } else {
            addUser({
                id,
                name,
                className,
            });
        }
        console.log(`Id: ${id}, name: ${name}, className: ${className}`);
    };

    return (
        <>
            <h3>{params.id ? "Update user" : "Add user"}</h3>
            <Form>
                <Row style={{ margin: "10px" }}>
                    <Col span={4}>ID</Col>
                    <Col span={8}>
                        <Input value={id} onChange={setId}></Input>
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col span={4}>Name</Col>
                    <Col span={8}>
                        <Input value={name} onChange={setName}></Input>
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col span={4}>Class</Col>
                    <Col span={16}>
                        <Input
                            value={className}
                            onChange={setClassName}
                        ></Input>
                    </Col>
                </Row>
            </Form>
            <Button loading={addUserState.loading} onClick={submit}>
                Submit
            </Button>
            {addUserState.success ? (
                <Text type="success">{addUserState.message}</Text>
            ) : (
                <Text type="danger">{addUserState.message}</Text>
            )}
        </>
    );
}

function mapStateToProps(state) {
    return {
        addUserState: state.users.addUser,
        getUserState: state.users.getUser,
    };
}

export default connect(mapStateToProps, { addUser, getUser })(AddUser);
