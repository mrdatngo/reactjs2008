var fs = require("fs");

module.exports = (req, res) => {
    fs.readFile("users.json", function (err, data) {
        const { id } = req.query;
        var usersDataStr = String(data);
        var usersData = JSON.parse(usersDataStr);
        var user = usersData.users.find((user) => user.id == id);
        res.status(200).json({
            success: true,
            user,
        });
    });
};
