let temperatures: number[] = [4, 20, 13, 35, 40];
let highestTemperature: number = temperatures[0];
for (let temp of temperatures) {
  if (temp > highestTemperature) {
    highestTemperature = temp;
  }
}
console.log("Highest Temperature : ", highestTemperature);
