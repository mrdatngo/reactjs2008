const express = require("express");
const app = express();
const port = 3000;

app.get("/student", (req, res) => {
    // res.send('{ "student_id": 1, student_name: "Mr John"}');
    res.json({ student_id: 1, student_name: "MrJohn" });
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
