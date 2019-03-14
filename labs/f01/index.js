var time = require("time");
var express = require("express");
var port = process.env.PORT || 8080;
var app = express();


//console.log(now.getHours());

app.get("/",(request, response) => {
    var now = new time.Date();
    response.send(now.toTimeString());
    //console.log("new request received")
});

app.listen(port);