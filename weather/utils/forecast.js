const request = require("request");

const KEY = "5cbb80564f99dcab22c2f42c321bc8ac";

const forecast = (lat, lon, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`;
  request(
    {
      url,
      json: true,
    },
    (er, res) => {
      if (er) {
        callback("forecast error" + er, undefined);
      } else if (res === 0) {
        callback("no results at all", undefined);
      } else {
        callback(undefined, {
          data: res.body.weather[0].description,
        });
      }
    }
  );
};

module.exports = forecast;
