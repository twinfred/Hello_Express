var express = require("express");
console.log("What is express?", express);

var app = express();
console.log("What is app?", app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname+"/static"));

app.get('/', function(request, response){
    console.log("What is request?", request);
    console.log("What is response?", response);
    response.send("<h1>Hello Express!</h1>");
});

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

app.listen(8000, function(){
    console.log("Listening at port 8000!");
});