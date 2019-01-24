require("dotenv").config();

var fs = require('fs');

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var request = require("request");

var programToRun = process.argv[2];

var action = process.argv[3]; //spotify


if (programToRun === "spotify-this-song") {
    spotifyThisSong(action);

} else if (programToRun === "movie-this") {
    movieThis(action);

} else if (programToRun === "do-what-it-says") {
    doWhatItSays(action);

} else {
    console.log("error check entry")

}

//CODE FOR SPOTIFY//

function spotifyThisSong(song = '') {
    var spotify = new Spotify(keys.spotify);
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        //Artist(s)
        console.log(data.tracks.items[0].artists[0].name);
        // The song's name
        console.log(data.tracks.items[0].name);
        // A preview link of the song from Spotify
        console.log(data.tracks.items[0].external_urls.spotify);
        // The album that the song is from
        console.log(data.tracks.items[0].album.name);

    });

}

//CODE FOR OMBDAPI
function movieThis(movieName) {

    request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy', function (error, response, body) {
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDB Ratings: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).RottenTomatoes);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
    })
}


//CODE FOR DO WHAT IT SAYS

function doWhatItSays() {

    fs.readFile("./random.txt", "utf8", function (err, data) {
        if (err) return console.log(err);
        var thingsArr = data.split(",");
        thingsArr.forEach(function (thing) {
            console.log(thing.trim());
        })

        console.log("= = = = = = = = = = = = = = ");
        for (var i = 0; i < thingsArr.length; i++) {
            console.log(thingsArr[i].trim());
        }

    });



};
