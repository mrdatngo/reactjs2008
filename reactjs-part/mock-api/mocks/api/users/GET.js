var users = [
    {
        id: "RJ1",
        name: "Vu Quang Phong",
        class: "REACTJS",
    },
    {
        id: "RJ2",
        name: "Nguyen Thi Nga",
        class: "REACTJS",
    },
    {
        id: "RJ3",
        name: "Ha Huy Tuyen",
        class: "REACTJS",
    },
    {
        id: "RJ4",
        name: "Huy",
        class: "REACTJS2008",
    },
    {
        id: "RJ5",
        name: "Giang Son",
        class: "REACTJS2008",
    },
    {
        id: "RJ6",
        name: "Truong",
        class: "REACTJS2008",
    },
];

module.exports = (req, res) => {
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
};
