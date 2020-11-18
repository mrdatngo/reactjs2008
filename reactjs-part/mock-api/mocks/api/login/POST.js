var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    let { username, password } = req.body;

    // correct: query from db
    if (username !== "admin" || password !== "123456") {
        res.status(401).json({
            message: "Unauthorized",
        });
        return;
    }

    let token = jwt.sign(
        {
            username,
            // expired: new Date().getTime() + 8 * 60 * 60 * 1000,
            roles: ["read", "write"],
        },
        "REACTJS2008",
        { expiresIn: "8h" }
    );
    var data = jwt.decode(token);
    console.log("DATA", data);
    console.log("username: ", username, "password: ", password);
    res.status(200).json({ status: true, username, token });
};
