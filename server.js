//NPM Packages, Express App Setup//
var bodyParser = require("body-parser");//Parses data to JSON format//
var express = require("express");//Makes routing easier using node.js//
// var path = require("path");//

var app = express();//Express Server//
var PORT = process.env.PORT || 8080;//Server Port Setup//

// app.get('/', function (req,res) {
//     res.send("Goood Evennningggg");
// })

app.use(bodyParser.urlencoded({ extended: false }))//Handles data parsing within Express, parses url middleware//
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);//Requiring API routes for FriendsList
require("./app/routing/htmlRoutes.js")(app);//Requiring HTML Routes

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);//Console.log for listening on Port 3000//

});


