"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let musiciansArray = [
    "Derrin Brown",
    "Doug Henning",
    "Dynamo",
    "Cris Angel",
    "David Blain",
];
function show_magicians(magicians) {
    function make_great(fName) {
        for (let name of magicians) {
            console.log(`${fName} ${name}`);
        }
    }
    make_great("the Great");
}
show_magicians(musiciansArray);
