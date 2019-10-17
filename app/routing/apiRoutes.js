//API-Routes to get or post data to server to store//
var loveInterests = require("../data/friends");

module.exports = function (app) {
    //API get route to get list of possible love interests when the love Seeker visits a page//
    app.get("/api/friends.js", function (req, res) {
        res.json(loveInterests);
    });
    //API post route to handle submitted surveys and the compatibility logic//
    app.post("api/friends.js", function (req, res) {
        var loveMatch = {
            name: "",
            photo: "",
            matchDifference: 500
        };

        //Variables that will obtain the love seeker's survey results, post those results, and parse those results//
        var loveSeeker = req.body;
        var loveSeekerScore = loveSeeker.scores;
        //Variable sused to calcuate the different between the love seekers scores and the score of each love interest
        var totalDifference = 0;

        //For Loop that will work to parse through the list of love interests//
        for (var i = 0; i < loveInterests.length; i++) {
            console.log(loveInterests[i].name);
            totalDifference = 0;

            //For Loop that will loop through the scores of each of the love interests and love seekers scores and calculate the difference//
            for (var j = 0; j < loveInterests[i].scores[j]; j++) {
                console.log(loveInterests[i].name + loveSeekerScore[j].matchDifference);

                //Using the math.abs library/method to calculate the diffrence between the love Interest and love seeker's scores. ParseInt will be used to parse the strings into integers//
                totalDifference += Math.abs(parseInt(loveSeekerScore[j] - parseInt(loveInterests[i].scores[j])));

                //If statement that will check for if the sum of the differences is less than the difference of the current love match. If it finds it to be true, then a new love match is named and will be added to the list of love interests//
                if (totalDifference <= loveMatch.matchDifference) {

                    loveMatch.name = loveInterests[i].name;
                    loveMatch.photo = loveInterests[i].photo;
                    loveMatch.matchDifference = totalDifference;

                }
            }
        }

        //Pushing new love interests data to the db//
        loveMatch.push(loveSeeker);

        //res.json in this instance will return json data pertaining to the love seekers match//
        res.json(loveMatch);
    });
};