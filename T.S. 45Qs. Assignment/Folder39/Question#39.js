"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let city_country = (city, country) => {
    return `${city},${country}`;
};
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Dehli", "India"));
console.log(city_country("NewYork", "USA"));
