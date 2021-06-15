const http = require("http");
const config = require("../02.weather-app/config");

const [latitude, longitude] = [40, 135];
const url = `${config.URL_WEATHER}?access_key=${config.TOKEN_WEATHER}&query=${latitude},${longitude}`;

// 1. Creating a request.
const request = http.request(url, (response) => {
  let data = "";

  // When a chunk of data comes in, this gets fired.
  // Received chunk is Buffer, which is in binary form
  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  // When all of the data chunks arrive, this gets fired.
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

// Gets fired when error occurs in setting up the request
request.on("error", (error) => {
  console.log("Error: ", error);
});

// 2. Fire up the request
request.end();
