const config = require("../config");
const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `${config.URL_WEATHER}?access_key=${config.TOKEN_WEATHER}&query=${latitude},${longitude}`;
  request({ url, json: true }, (error, response) => {
    try {
      if (error) throw new Error("Unable to connect to the weather service");
      if (response.body.error) throw new Error("Unable to find the location");

      // prettier-ignore
      const { temperature, feelslike, weather_descriptions } = response.body.current;
      callback(
        undefined,
        `${weather_descriptions[0]}. It is currently ${temperature} ℃ . Feels like ${feelslike} ℃  though`
      );
    } catch (err) {
      callback(err.message, undefined);
    }
  });
};

module.exports = forecast;
