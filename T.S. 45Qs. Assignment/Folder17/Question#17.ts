/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

import { dinnerInvitation } from "../Folder16/Question#16";

console.log(
  "Guys I really apologize to inform  you that our new dining table will not arrive in time , bc of that we have the space for only two guests to have dinner with me."
);

console.log(
  `${dinnerInvitation[5]} I feel sorry that I cannot invite you to dinner tonight :(`
);
dinnerInvitation.pop();

console.log(
  `${dinnerInvitation[4]} I feel sorry that I cannot invite you to dinner tonight :(`
);

dinnerInvitation.pop();
console.log(
  `${dinnerInvitation[3]} I feel sorry that I cannot invite you to dinner tonight :(`
);

dinnerInvitation.pop();
console.log(
  `${dinnerInvitation[2]} I feel sorry that I cannot invite you to dinner tonight :(`
);

dinnerInvitation.pop();
console.log(dinnerInvitation);

console.log(
  `Hi, ${dinnerInvitation[0]} and ${dinnerInvitation[1]}you guys are still invited to the dinner ... so get ready for the relish dinner`
);

dinnerInvitation.pop();
dinnerInvitation.pop();

console.log(dinnerInvitation);
