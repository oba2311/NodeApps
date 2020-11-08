const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Geocoding
// given an address - convert to lat/long.

city = process.argv[2];

if (city) {
  geocode(city, (er, { lat, lon, location }) => {
    if (er) {
      return console.log(er);
    }
    // once the geocode landed, triger getting the forcast:
    forecast(lat, lon, (error, forcastRes) => {
      if (er) {
        return console.log("Error", error);
      }

      console.log(location);
      console.log(forcastRes);
    });
  });
} else {
  console.log("no input given");
}
