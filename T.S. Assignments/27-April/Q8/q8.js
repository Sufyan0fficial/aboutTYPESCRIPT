let temperatures = [4, 20, 13, 35, 40];
let highestTemperature = temperatures[0];
for (let temp of temperatures) {
    if (temp > highestTemperature) {
        highestTemperature = temp;
    }
}
console.log("Highest Temperature : ", highestTemperature);
export {};
