// var users = [
//     {
//         id: "RJ1",
//         name: "Vu Quang Phong",
//         class: "REACTJS",
//     },
//     {
//         id: "RJ2",
//         name: "Nguyen Thi Nga",
//         class: "REACTJS",
//     },
//     {
//         id: "RJ3",
//         name: "Ha Huy Tuyen",
//         class: "REACTJS",
//     },
//     {
//         id: "RJ4",
//         name: "Huy",
//         class: "REACTJS2008",
//     },
//     {
//         id: "RJ5",
//         name: "Giang Son",
//         class: "REACTJS2008",
//     },
//     {
//         id: "RJ6",
//         name: "Truong",
//         class: "REACTJS2008",
//     },
// ];

var fs = require("fs");
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    let token = req.header("authorization");
    if (!token) {
        res.status(401).json({
            success: false,
            message: "Unauthorized!",
        });
        return;
    }
    try {
        const tokenStr = token.split(" ")[1];
        jwt.verify(tokenStr, "REACTJS2008");
    } catch (err) {
        res.status(401).json({
            success: false,
            message: "Unauthorized!",
        });
        return;
    }
    console.log("req");
    fs.readFile("users.json", function (err, data) {
        var usersDataStr = String(data);
        var usersData = JSON.parse(usersDataStr);
        users = usersData.users;
        let { key, page, pageSize } = req.query;
        if (!key) {
            key = "";
        }
        if (!page) {
            page = 1;
        }
        if (!pageSize) {
            pageSize = 10;
        }
        let filterUsers = users.filter((user) =>
            user.name.toLowerCase().includes(key.toLowerCase())
        );
        let total = filterUsers.length;
        let fromIndex = (page - 1) * pageSize;
        let endIndex = page * pageSize;
        if (endIndex > total) {
            endIndex = total;
        }
        filterUsers = filterUsers.filter(
            (_, index) => index >= fromIndex && index < endIndex
        );
        res.status(200).json({
            success: true,
            data: filterUsers,
            key,
            page,
            pageSize,
            total,
        });
    });
};
