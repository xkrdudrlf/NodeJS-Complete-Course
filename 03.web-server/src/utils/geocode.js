const config = require("./config");
const request = require("request");

const geocode = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);
  const url = `${config.URL_GEOCODING}/${encodedAddress}.json?access_token=${config.TOKEN_GEOCODING}&limit=1`;

  request({ url, json: true }, (error, response) => {
    try {
      if (error) throw new Error("Unable to connect to the geocoding service");
      if (!response.body.features || response.body.features.length === 0)
        throw new Error(`Unable to find the geolocation for "${address}"`);

      const data = {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      };
      callback(undefined, data);
    } catch (err) {
      callback(err.message, undefined);
    }
  });
};

module.exports = geocode;
