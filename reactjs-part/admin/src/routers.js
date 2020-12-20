//import AddUser from "./views/components/users/AddUser";
//import ListUser from "./views/components/users/ListUser";
// lazy loading
import React from "react";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";

const AddUser = React.lazy(
    () => import("./views/components/users/AddUser")
    // new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(import("./views/components/users/AddUser"));
    //     }, 1000);
    // })
);

const ListUser = React.lazy(() => import("./views/components/users/ListUser"));

const routers = [
    {
        name: "Option1",
        path: "/option1",
        icon: <PieChartOutlined />,
        component: <h3>Option1</h3>,
    },
    {
        name: "Users",
        path: "/users",
        icon: <UserOutlined />,
        children: [
            {
                name: "Add user",
                path: "/users/add",
                icon: <UserOutlined />,
                component: <AddUser />,
            },
            {
                name: "List user",
                path: "/users/list",
                icon: <UserOutlined />,
                component: <ListUser />,
            },
            {
                name: "Update user",
                path: "/users/edit/:id",
                icon: <UserOutlined />,
                component: <AddUser />,
                hidden: true,
            },
        ],
    },
];

export default routers;
