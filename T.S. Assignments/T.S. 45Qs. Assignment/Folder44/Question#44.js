"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sandwich_Items = [
    "Bread",
    "Mayonnaise",
    "Lettuce",
    "Slice Ham",
    "Cheese",
];
let sandwich_Items1 = ["Mayonnaise", "Lettuce", "Slice Ham"];
let sandwich_Items2 = ["Bread", "Cheese", "Lettuce"];
function sandwich(items) {
    console.log(`The sandwich is prepared with the following items:`);
    items.forEach((item) => console.log(item));
    console.log("\n");
}
sandwich(sandwich_Items);
sandwich(sandwich_Items1);
sandwich(sandwich_Items2);
