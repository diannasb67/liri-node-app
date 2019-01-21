require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var programToRun = process.argv[2];

var action = process.argv[3]; //spotify

var getMovie = process.argv[4]; //movie

var request = require("request");


if (programToRun === "spotify-this-song") {
    spotifyThisSong(action);

} else if (programToRun === "movie-this") {
    movieThis(getMovie);

} else if (programToRun === "do-what-it-says") {
    doWhatItSays();

} else {
    console.log("error check entry")

}


function spotifyThisSong(song = '') {
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

function movieThis(Title = "aquaman") {
    getMovie = "";

    request('http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy', function (error, response, body) {
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


function doWhatItSays() {
    console.log("running do what it says")
}



