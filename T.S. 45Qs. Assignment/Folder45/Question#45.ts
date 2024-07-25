function createCar(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
) {
  let car: { [key: string]: any } = {
    manufacturer: manufacturer,
    model: model,
  };

  options.forEach(([key, value]) => {
    car[key] = value;
  });

  return car;
}

let car = createCar("Toyota", "Corolla", ["color", "Blue"], ["year", 2022]);

console.log(car);
