"use strict";
/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/
Object.defineProperty(exports, "__esModule", { value: true });
let favPlaces = [
    "Makkah Mukarma",
    "Paris",
    "Alaska",
    "Norway",
    "London",
];
console.log(favPlaces);
let favPlaces1 = [...favPlaces].sort();
console.log(favPlaces1);
console.log(favPlaces);
let favPlaces2 = [...favPlaces].sort().reverse();
console.log(favPlaces2);
console.log(favPlaces);
let favPlaces_reverse = favPlaces.reverse();
console.log(favPlaces_reverse);
let favPlaces_reverse2 = favPlaces.reverse();
console.log(favPlaces_reverse2);
let favPlaces_sort = favPlaces.sort();
console.log(favPlaces_sort);
let favPlaces_reversealphabetic = favPlaces.sort().reverse();
console.log(favPlaces_reversealphabetic);
