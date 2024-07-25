//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

type Book = {
  Name: string;
  Author: string;
  Publish: number;
};

interface Product {
  name: string;
  price: number;
  instock: boolean;
}

let book: Book = {
  Name: "Rich Dad Poor Dad",
  Author: "Robert Kiyosaki",
  Publish: 1990,
};

let product: Product = {
  name: "DELL Laptop",
  price: 55000,
  instock: true,
};

console.log("Book Object : ", book);
console.log("Product Object : ", product);
