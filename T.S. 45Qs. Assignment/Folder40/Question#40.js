"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artistName, albumTitle, tracks) {
    let music_album = {
        artistName: artistName,
        albumTitle: albumTitle,
    };
    if (tracks !== undefined) {
        music_album["tracks"] = tracks;
    }
    return music_album;
}
// Corrected function calls with the arguments in the right order
console.log(make_album("Pink Floyd", "The Dark Side of the Moon"));
console.log(make_album("Eminem", "The Marshall Mathers LP"));
console.log(make_album("Ye", "My Beautiful Dark Twisted Fantasy", 17));
