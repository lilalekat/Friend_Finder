//NPM Packages, Express App Setup//
var bodyParser = require("body-parser");//Parses data to JSON format//
var express = require("express");//Makes routing easier using node.js//
var path = require("path");//

var app = express();
var PORT = process.env.PORT || 8080;//Server Setup//

app.get('/', function (req,res) {
    res.send("Goood Evennningggg");
})

app.use(bodyParser.urlencoded({ extended: false }))//Handles data parsing within Express, parses url middleware//
app.use(bodyParser.json())

app.use(function (req,res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})

// require("./routing/apiRoutes")(app);
// require("./routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);//Console.log for listening on Port 3000//

});


