var express = require("express");

var app = express();

app.set('views', __dirname + '/views');

app.use(express.static(__dirname+"/static"));

app.listen(8000, function(){
    console.log("Listening at port 8000!");
});