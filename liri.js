require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var programToRun = process.argv[2];

var action = process.argv[3];

if (programToRun === "concert-this") {
    concertThis();

} else if (programToRun === "spotify-this-song") {
    spotifyThisSong(action);

} else if (programToRun === "movie-this") {
    movieThis();

} else if (programToRun === "do-what-it-says") {
    doWhatItSays();

} else {
    console.log("error check entry")

}

function concertThis() {
    console.log("running concert program");
}

function spotifyThisSong(song = 'All the Small Things') {
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

function movieThis() {
    console.log("running movie-this")
}

function doWhatItSays() {
    console.log("running do what it says")
}


