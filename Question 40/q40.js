"use strict";
// make_album function
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions and creating 3 variables with diffrent values
let album1 = make_album("Hamzah", "Album title 1");
let album2 = make_album("Usman", "Album title 2");
// calling a make_album fucntion with third parameter
let album3 = make_album("Ali", "Album title 3", 10);
// printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
