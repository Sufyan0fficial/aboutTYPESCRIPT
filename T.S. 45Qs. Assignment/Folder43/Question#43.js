"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let musiciansArray = [
    "Derrin Brown",
    "Doug Henning",
    "Dynamo",
    "Cris Angel",
    "David Blain",
];
let updatedName = [];
function show_magicians(magicians) {
    function make_great(fName) {
        for (let name of magicians) {
            updatedName.push(`${fName} ${name}`);
        }
    }
    make_great("the Great");
    console.log(musiciansArray);
    console.log(updatedName);
}
show_magicians(musiciansArray);
