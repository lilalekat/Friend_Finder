//HTML Routes to Direct User to HTML page//
var path = require("path");//Directs user 

module.exports = function (app) {
    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });//Directs user to survey html page//
    app.use( function(req,res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });//Directs user to home page as a default route//
}
