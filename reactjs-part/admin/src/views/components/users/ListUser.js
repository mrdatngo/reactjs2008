import React, { Component } from "react";
import { Table, Tag, Space, Input } from "antd";
import { connect } from "react-redux";
import { fetchUsers } from "../../../actions/users";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const { Search } = Input;

class ListUser extends Component {
    constructor() {
        super();
        this.state = {
            columns: [
                {
                    title: "ID",
                    dataIndex: "id",
                    key: "id",
                },
                {
                    title: "Name",
                    dataIndex: "name",
                    key: "name",
                    render: (text) => <a>{text}</a>,
                },
                {
                    title: "Marks",
                    key: "mark",
                    dataIndex: "marks",
                    render: () => (
                        <Tag color={"red"} key={"1"}>
                            1
                        </Tag>
                    ),
                },
                {
                    title: "Action",
                    key: "action",
                    render: ({ id }) => (
                        <Space size="middle">
                            <a>View</a>
                            <a onClick={() => this.onEditUser(id)}>Edit</a>
                            <Link to={`/users/edit/${id}`}>Edit</Link>
                            <a>Delete</a>
                        </Space>
                    ),
                },
            ],
            key: "",
            current: 1,
            pageSize: 5,
        };
    }

    onEditUser = (id) => {
        console.log(id);
        setTimeout(() => {
            this.props.history.push(`/users/edit/${id}`);
        }, 2000);
    };

    componentDidMount() {
        const { key, current, pageSize } = this.state;
        this.props.fetchUsers({ key, current, pageSize });
    }

    onFetchUsers = (key, current) => {
        // const { key, current } = this.state;
        const { pageSize } = this.state;
        this.props.fetchUsers({ key, current, pageSize });
    };

    onPageChange = (current) => {
        this.setState({ current });
        this.onFetchUsers(this.state.key, current);
    };

    onSearch = (key) => {
        this.setState({ key, current: 1 });
        this.onFetchUsers(key, 1);
    };

    onSearchChange = (event) => {
        let key = event.target.value;
        if (!key) {
            key = "";
        }
        this.onSearch(key);
    };

    render() {
        const { columns, current, pageSize } = this.state;
        const { list } = this.props;
        return (
            <>
                <Search
                    placeholder="input search text"
                    onSearch={this.onSearch}
                    onChange={this.onSearchChange}
                    enterButton
                    style={{ width: 300, margin: "10px 0" }}
                />
                <Table
                    loading={list.loading}
                    columns={columns}
                    dataSource={list.users}
                    pagination={{
                        pageSize,
                        current,
                        total: list.total,
                        onChange: this.onPageChange,
                    }}
                />
            </>
        );
    }
}

ListUser.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    list: PropTypes.shape({
        total: PropTypes.number.isRequired,
        loading: PropTypes.bool.isRequired,
        users: PropTypes.array.isRequired,
    }),
};

function mapStateToProps(state) {
    return {
        list: state.users.list,
    };
}

export default connect(mapStateToProps, { fetchUsers })(withRouter(ListUser));
