import React, { useState, useEffect } from "react";
import { Form, Row, Col, Input, Button } from "antd";
import { useFormInput } from "../../../utils/hooks";
import { connect } from "react-redux";
import { addUser } from "../../../actions/users";

function AddUser({ addUser, addUserState }) {
    const [id, setId] = useFormInput("");
    const [name, setName] = useFormInput("");
    const [className, setClassName] = useFormInput("");

    const submit = () => {
        addUser({
            id,
            name,
            className,
        });
        console.log(`Id: ${id}, name: ${name}, className: ${className}`);
    };

    return (
        <>
            <h3>Add user</h3>
            <Form>
                <Row style={{ margin: "10px" }}>
                    <Col span={4}>ID</Col>
                    <Col span={8}>
                        <Input onChange={setId}></Input>
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col span={4}>Name</Col>
                    <Col span={8}>
                        <Input onChange={setName}></Input>
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col span={4}>Class</Col>
                    <Col span={16}>
                        <Input onChange={setClassName}></Input>
                    </Col>
                </Row>
            </Form>
            <Button loading={addUserState.loading} onClick={submit}>
                Add
            </Button>
        </>
    );
}

function mapStateToProps(state) {
    return {
        addUserState: state.users.addUser,
    };
}

export default connect(mapStateToProps, { addUser })(AddUser);
