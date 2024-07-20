"use strict";
// describe a function
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// calling a function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
