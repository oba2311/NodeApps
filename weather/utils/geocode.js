const request = require("request");

const GEOKEY =
  "pk.eyJ1Ijoib2JhMjMxMSIsImEiOiJja2g1OW9nMGkwMTdvMnBudjJsYzJyaWJpIn0.ebsw15eOQVeX2rxLXKp9Iw";
const LIMIT = "limit=1";

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${GEOKEY}&${LIMIT}`;

  request(
    {
      url,
      json: true,
    },
    (er, { body }) => {
      if (er) {
        callback("error", undefined);
      } else if (body.features.length === 0) {
        callback("no results at all", undefined);
      } else {
        callback(undefined, {
          lat: body.features[0].center[0],
          lon: body.features[0].center[1],
          location: body.features[0].text,
        });
      }
    }
  );
};

module.exports = geocode;
