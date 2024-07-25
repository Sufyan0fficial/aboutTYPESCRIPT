let sandwich_Items: string[] = [
  "Bread",
  "Mayonnaise",
  "Lettuce",
  "Slice Ham",
  "Cheese",
];
let sandwich_Items1: string[] = ["Mayonnaise", "Lettuce", "Slice Ham"];
let sandwich_Items2: string[] = ["Bread", "Cheese", "Lettuce"];

function sandwich(items: string[]) {
  console.log(`The sandwich is prepared with the following items:`);
  items.forEach((item) => console.log(item));
  console.log("\n");
}

sandwich(sandwich_Items);
sandwich(sandwich_Items1);
sandwich(sandwich_Items2);
