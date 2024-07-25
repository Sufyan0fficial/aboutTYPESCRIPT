"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let animals = ["Lion", "Tiger", "Leopard"];
for (let name of animals) {
    console.log(name);
}
for (let name of animals) {
    if (name == "Lion")
        console.log("Lions are the only big cats that live in social groups called prides, which consist of related females and their offspring");
    else if (name == "Tiger")
        console.log("Tigers are renowned for their strength and solitary nature, with each individual maintaining a large territory to hunt and live alone");
    else if (name == "Leopard")
        console.log("Leopards are incredibly adaptable and are known for their climbing abilities, often dragging their prey up trees to keep it safe from scavengers");
}
console.log("All 3 animals are \nBig Cats \nCarnivours \nStealthy Hunters");
