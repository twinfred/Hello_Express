var express=require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');

app.set('views', __dirname+'/views');
app.use(express.static(__dirname+'/static'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'this is my secret key, homie!',
    resave: true,
    saveUninitialized: true,
}));

app.get('/', function(req, res){
    console.log(req.session);
    res.render('index');
})

app.get('/result', function(req, res){
    console.log("FORM", req.session.form)
    if(req.session.form == undefined){
        res.redirect('/');
    }else{
        res.render('result', {form: req.session.form});
    }
})

app.post('/submit_form', function(req, res){
    console.log(req.body);
    req.session.form = {
        name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        comment: req.body.comment,
    }
    res.redirect('/result');
})

app.listen(2748, function(){
    console.log("Listening on port 2748!");
});