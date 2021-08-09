const express = require("express");
const path = require("path");
var mysql = require('mysql');

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

//all going back to index.html

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3306, () => console.log("Server running..."));

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    // port: 3000
  });

  con.connect(function(err) {
      debugger;
    console.log('hello');
    if (err) throw err;
    console.log("Connected!");
  });

