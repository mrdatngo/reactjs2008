const routers = [
    {
        name: "Option1",
        path: "/option1",
        icon: "",
        component: <h3>Option1</h3>,
    },
    {
        name: "User",
        path: "/user",
        icon: "",
        children: [
            {
                name: "Tom",
                path: "/user/tom",
                icon: "",
                component: "TOM",
            },
            {
                name: "Jerry",
                path: "/user/jerry",
                icon: "",
                component: "Jerry",
            },
        ],
    },
];

export default routers;
