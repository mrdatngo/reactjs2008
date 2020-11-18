const express = require("express");
const apiMocker = require("connect-api-mocker");
const cors = require("cors");

const app = express();
app.use(cors());

app.use("/api", apiMocker("mocks/api"));
console.log("START server at localhost:8080");
app.listen(8080);
