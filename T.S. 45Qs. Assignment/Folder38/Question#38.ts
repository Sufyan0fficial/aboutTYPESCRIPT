function describe_city(city: string, country: string = "Pakistan") {
  if (city == "Delhi") console.log(`${city} is not in ${country}`);
  else console.log(`${city} is in ${country}`);
}
describe_city("Lahore");

describe_city("Karachi");

describe_city("Delhi");
