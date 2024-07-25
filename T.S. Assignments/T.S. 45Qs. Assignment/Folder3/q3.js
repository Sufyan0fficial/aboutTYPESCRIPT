"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Muhammad Sufyan";
let lowerCase = personName.toLowerCase;
console.log(lowerCase);
let uppercase = personName.toUpperCase;
console.log(uppercase);
function titlecase(name) {
    return name
        .split(" ")
        .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
        .join(" ");
}
const name = "muhammad sufyan";
const titlecasedString = titlecase(name);
console.log(titlecasedString);
