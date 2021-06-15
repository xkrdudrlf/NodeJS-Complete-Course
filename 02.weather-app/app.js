const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
if (!address)
  return console.error(
    "Error: No input provided. Please provide an address to search its weather for"
  );
geocode(address, (error, data) => {
  try {
    if (error) throw new Error(`Error: ${error}`);
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) throw new Error("Error", error);
      console.log(data.location);
      console.log(forecastData);
    });
  } catch (err) {
    console.error(err.message);
  }
});
