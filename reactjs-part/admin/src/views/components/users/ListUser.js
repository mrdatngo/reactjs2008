import React, { Component } from "react";
import { Table, Tag, Space } from "antd";
import { connect } from "react-redux";
import { fetchUsers } from "../../../actions/users";

const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];

class ListUser extends Component {
    constructor() {
        super();
        this.state = {
            columns: [
                {
                    title: "Name",
                    dataIndex: "name",
                    key: "name",
                    render: (text) => <a>{text}</a>,
                },
                {
                    title: "Age",
                    dataIndex: "age",
                    key: "age",
                },
                {
                    title: "Address",
                    dataIndex: "address",
                    key: "address",
                },
                {
                    title: "Tags",
                    key: "tags",
                    dataIndex: "tags",
                    render: (tags) => (
                        <>
                            {tags.map((tag) => {
                                let color =
                                    tag.length > 5 ? "geekblue" : "green";
                                if (tag === "loser") {
                                    color = "volcano";
                                }
                                return (
                                    <Tag color={color} key={tag}>
                                        {tag.toUpperCase()}
                                    </Tag>
                                );
                            })}
                        </>
                    ),
                },
                {
                    title: "Action",
                    key: "action",
                    render: (text, record) => (
                        <Space size="middle">
                            <a>Invite {record.name}</a>
                            <a>Delete</a>
                        </Space>
                    ),
                },
            ],
        };
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { columns } = this.state;
        // const { data } = this.props;
        return <Table columns={columns} dataSource={data} />;
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, { fetchUsers })(ListUser);
