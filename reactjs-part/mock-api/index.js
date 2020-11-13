var express = require("express");
var apiMocker = require("connect-api-mocker");
var cors = require("cors");

var app = express();
app.use(cors());

app.use("/api", apiMocker("mocks/api"));
console.log("START server at localhost:8080");
app.listen(8080);
