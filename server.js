const express = require("express");
const path = require("path");
var mysql = require('mysql');

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend/index.html", "static")));

//all going back to index.html

app.get("/", (req, res) => {
    res.send('hello world');
});

app.get("/api/courses", (req, res) => {
    res.send([1,2,3])
});

app.listen(process.env.PORT || 3306, () => console.log("Server running..."));

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
  });
  con.connect(function(err) {
    console.log('hello');
    if (err) throw err;
    console.log("Connected!");
  });

