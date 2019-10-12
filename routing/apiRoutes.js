//API-Routes to get or post data to server to store//
var loveInterests = require(".../app/data/friends");

module.exports = function (app) {
    app.get("/api/friends", function(req,res) {
        res.json(loveInterests);//API route to get list of possible love interests//
    });
    app.post("api/friends", function(req,res) {
        res.json(loveInterests);//API route to post new love interests//
    })
}