var fs = require("fs");

module.exports = (req, res) => {
    fs.readFile("users.json", function (err, data) {
        // console.log(err);
        // console.log(String(data));
        const { id, name, className } = req.body;
        const user = {
            id,
            name,
            class: className,
        };
        var usersDataStr = String(data);
        var usersData = JSON.parse(usersDataStr);
        usersData.users.push(user);
        console.log(usersData.users);

        fs.writeFile("users.json", JSON.stringify(usersData), function (err) {
            if (err) throw err;
            console.log("Saved!");
        });

        res.status(200).json({
            success: true,
            message: "Add user successful!",
            users: usersData.users,
        });
    });
};
