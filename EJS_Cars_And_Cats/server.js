var express = require("express");

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname+"/static"));

app.get("/cars", function (request, response){
    response.render('cars');
})

app.get("/cats", function (request, response){
    response.render('cats');
})

app.get("/form", function (request, response){
    response.render('form');
})

app.get("/cat1", function(request, response){
    var context = {
        name: "Henry",
        fav_food: "Apples",
        age: 4,
        fav_toys: ["Mouse", "Catnip Ball"],
        img: "black-cat-01.jpg",
    }
    response.render('details', context);
})

app.get("/cat2", function(request, response){
    var banana = {
        name: "Duane",
        fav_food: "100 Grand Bars",
        age: 7,
        fav_toys: ["Purple Ball", "Squeeky Lemon", "Feather Shaker"],
        img: "black-cat-02.jpg",
    }
    response.render('details', banana);
})

app.get("/cat3", function(request, response){
    var cat_details = {
        name: "Jeff",
        fav_food: "Tim's Soul",
        age: 2,
        fav_toys: ["None"],
        img: "black-cat-03.jpg",
    }
    response.render('details', cat_details);
})

app.get("/cat4", function(request, response){
    var asdfasdf = {
        name: "Pinapple",
        fav_food: "Upside Down Cake",
        age: 2.5,
        fav_toys: ["Whisk", "Mixing Bowl"],
        img: "black-cat-04.jpg",
    }
    response.render('details', asdfasdf);
})


app.listen(8000, function(){
    console.log("Listening at port 8000!");
});