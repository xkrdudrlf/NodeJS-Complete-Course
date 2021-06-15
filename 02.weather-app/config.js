const URL_WEATHER = `http://api.weatherstack.com/current`;
const URL_GEOCODING = "https://api.mapbox.com/geocoding/v5/mapbox.places";
const TOKEN_WEATHER = "b4312e3935762e6a8bc917cac31914af";
const TOKEN_GEOCODING =
  "pk.eyJ1IjoieGtyZHVkcmxmIiwiYSI6ImNrZ3ZqOGoydjAwdzcycHF0cDdmaDQweDgifQ.GcqzClyyzty9f-8OoMrchQ";

module.exports = {
  URL_WEATHER,
  URL_GEOCODING,
  TOKEN_WEATHER,
  TOKEN_GEOCODING,
};

// b4312e3935762e6a8bc917cac31914af
// http://api.weatherstack.com/
// http://api.weatherstack.com/current?access_key=b4312e3935762e6a8bc917cac31914af&query=37.8267,-122.4223

// MapBox
// pk.eyJ1IjoieGtyZHVkcmxmIiwiYSI6ImNrZ3ZqOGoydjAwdzcycHF0cDdmaDQweDgifQ.GcqzClyyzty9f-8OoMrchQ

/*
  {
    "success": false,
    "error": {
      "code": 601,
      "type": "missing_query",
      "info": "Please specify a valid location identifier using the query parameter."
    }
  }
*/
