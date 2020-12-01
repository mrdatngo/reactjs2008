import AddUser from "./views/components/users/AddUser";
import ListUser from "./views/components/users/ListUser";

const routers = [
    {
        name: "Option1",
        path: "/option1",
        icon: "",
        component: <h3>Option1</h3>,
    },
    {
        name: "Users",
        path: "/users",
        icon: "",
        children: [
            {
                name: "Add user",
                path: "/users/add",
                icon: "",
                component: <AddUser />,
            },
            {
                name: "List user",
                path: "/users/list",
                icon: "",
                component: <ListUser />,
            },
        ],
    },
];

export default routers;
