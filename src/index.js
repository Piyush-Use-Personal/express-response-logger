const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const reqlog = require("./logger");
console.log("test");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(reqlog);
app.get("/", (req, res) => res.send("logged!"));
//create a server object:

app.post("/", function (req, res) {
  res.send("received");
});

app.listen(8080, function () {
  console.log("server running on 8080");
}); //the server object listens on port 8080

module.exports = app;
