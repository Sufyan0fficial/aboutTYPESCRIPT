"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = [
    "Husnain",
    "Sufyan",
    "Usman",
    "AbuBakr",
    "Ahmad",
];
let new_users = ["Muhammad", "Sufyan", "Husnain", "Zain", "Huzaifa"];
for (let user of new_users) {
    if (current_users.includes(user)) {
        console.log(`Username ${user} already used ! Please Enter a unique username `);
    }
    else {
        console.log(`Username ${user} Available`);
    }
}
