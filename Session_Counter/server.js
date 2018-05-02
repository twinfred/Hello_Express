var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname+'/views');
app.use(express.static(__dirname+'/static'));

app.set('view engine', 'ejs');

app.use(session({
    secret: 'keyboard cat',
}))

app.get('/', function(req, res){
    console.log(req.session.count);
    if(req.session.count == undefined){
        req.session.count = 0;
        console.log("first load")
    }else{
        req.session.count += 1;
        console.log("woohoo")
    }
    console.log(req.session.count);
    res.render('index', {count: req.session.count});
});

app.listen(2748, function(){
    console.log("Listening on port 2748!");
});