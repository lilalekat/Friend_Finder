//HTML Routes to Direct User to proper HTML page, which will be either the home.html or survey.html page//
var path = require("path");

module.exports = function (app) {
    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });//Directs user to survey html page//
    app.use(function(req,res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });//Directs user to home page as a default route//
}
