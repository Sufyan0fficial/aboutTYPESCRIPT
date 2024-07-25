"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", message = "I love Typescript") {
    console.log(`Size of shirt : ${size} \nMessage Printed : ${message}`);
}
make_shirt();
make_shirt("medium");
make_shirt("any", "I love JavaScript");
