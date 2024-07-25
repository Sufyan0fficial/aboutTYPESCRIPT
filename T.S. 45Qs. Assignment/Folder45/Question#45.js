"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Example function calls
let car1 = createCar("Toyota", "Corolla", ["color", "Blue"], ["year", 2022]);
console.log(car1);
