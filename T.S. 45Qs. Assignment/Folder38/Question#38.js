"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Pakistan") {
    if (city == "Delhi")
        console.log(`${city} is not in ${country}`);
    else
        console.log(`${city} is in ${country}`);
}
describe_city("Lahore");
describe_city("Karachi");
describe_city("Delhi");
