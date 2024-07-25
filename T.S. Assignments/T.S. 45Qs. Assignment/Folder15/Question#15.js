"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
exports.dinnerInvitation = void 0;
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let dinnerInvitation = ["AbuBakr", "Ahmad Fareedi", "Abraiz"];
exports.dinnerInvitation = dinnerInvitation;
//person who is unavailable for dinner
console.log(`${dinnerInvitation[1]} is unavailable for dinner`);
//upading the guests list
dinnerInvitation[1] = "Umar";
//Sending invitation to dinner
console.log(`Assalam O Aliqum, ${dinnerInvitation[0]}, you are warmly welcome to have a relis dinner with me tonigh. I am impatiently waiting for your arrival and I am sure you will not refuse to come.\n`);
console.log(`Assalam O Aliqum, ${dinnerInvitation[1]}, you are warmly welcome to have a relis dinner with me tonigh. I am impatiently waiting for your arrival and I am sure you will not refuse to come.\n`);
console.log(`Assalam O Aliqum, ${dinnerInvitation[2]}, you are warmly welcome to have a relis dinner with me tonigh. I am impatiently waiting for your arrival and I am sure you will not refuse to come.\n`);
