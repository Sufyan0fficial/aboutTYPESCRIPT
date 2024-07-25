/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

import { dinnerInvitation } from "../Folder15/Question#15.js";

console.log(
  `Guys ${dinnerInvitation.toString()} I have just decided to have a bigger dinner. For this, i am gonna invite our 3 more fellows so that we may enjoy the dinner as well remind our beloved memories which we saved during our school life. `
);

dinnerInvitation.unshift("Huzaifa");
dinnerInvitation.splice(2, 0, "Hassan");
dinnerInvitation.push("Zain");

console.log(dinnerInvitation);

export { dinnerInvitation };
