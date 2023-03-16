const http = require("http");
const port = 3000;

const data = [
  {
    name: "Kolkata",
    tempC: "31.0",
    tempF: "88.0",

    condition: {
      Text: "Mist",
      humidity: "43",
      feelsLikeC: "30.7",
      feelsLikeF: "87.2",
    },
  },
  {
    name: "London",
    tempC: "4.0",
    tempF: "39.2",

    condition: {
      Text: "Overcast",
      humidity: "75",
      feelsLikeC: "1.2",
      feelsLikeF: "34.2",
    },
  },
  {
    name: "Ottawa",
    tempC: "-3.4",
    tempF: "25.9",

    condition: {
      Text: "Clear",
      humidity: "67",
      feelsLikeC: "-8.4",
      feelsLikeF: "16.9",
    },
  },
  {
    name: "Mexico City",
    tempC: "20.0",
    tempF: "68.0",

    condition: {
      Text: "Clear",
      humidity: "26",
      feelsLikeC: "20.0",
      feelsLikeF: "68.0",
    },
  },
  {
    name: "Brasilia",
    tempC: "19.0",
    tempF: "66.2",

    condition: {
      Text: "Clear",
      humidity: "94",
      feelsLikeC: "19.0",
      feelsLikeF: "66.2",
    },
  },
  {
    name: "Paris",
    tempC: "1.0",
    tempF: "33.8",

    condition: {
      Text: "Mist",
      humidity: "93",
      feelsLikeC: "-2.0",
      feelsLikeF: "28.5",
    },
  },
  {
    name: "Chicago",
    tempC: "1.5",
    tempF: "34.7",

    condition: {
      Text: "Partly cloudy",
      humidity: "80",
      feelsLikeC: "-2.8",
      feelsLikeF: "27.0",
    },
  },
  {
    name: "Bali",
    tempC: "27.7",
    tempF: "81.9",

    condition: {
      Text: "Light rain shower",
      humidity: "77",
      feelsLikeC: "31.2",
      feelsLikeF: "88.2",
    },
  },
  {
    name: "Singapore",
    tempC: "25.0",
    tempF: "77.0",

    condition: {
      Text: "Moderate rain",
      humidity: "94",
      feelsLikeC: "27.9",
      feelsLikeF: "82.2",
    },
  },
  {
    name: "Kuala Lumpur",
    tempC: "27.0",
    tempF: "80.6",

    condition: {
      Text: "Partly cloudy",
      humidity: "84",
      feelsLikeC: "32.4",
      feelsLikeF: "90.3",
    },
  },
  {
    name: "Jakarta",
    tempC: "31.0",
    tempF: "87.8",

    condition: {
      Text: "Light rain",
      humidity: "71",
      feelsLikeC: "36.0",
      feelsLikeF: "96.7",
    },
  },
  {
    name: "New York",
    tempC: "4.4",
    tempF: "39.9",

    condition: {
      Text: "Clear",
      humidity: "57",
      feelsLikeC: "20.6",
      feelsLikeF: "33.1",
    },
  },
  {
    name: "Vostok",
    tempC: "-8.8",
    tempF: "16.2",

    condition: {
      Text: 'Moderate or heavy snow showers"',
      humidity: "82",
      feelsLikeC: "-14.2",
      feelsLikeF: "6.4",
    },
  },
];

function getRouteData(route, data) {
  let status = 200;
  console.log("route: ", route);
  return JSON.stringify({
    apiData: data,
    // status,
    // route,
    // message:"hello"
  });
}

function getRequestData(req) {
  if (req.url === "/") {
    return getRouteData(req.url, data);
  } else {
    return getRouteData("NOT FOUND", data);
  }
}

const ourServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/txt" });
  res.end(getRequestData(req));
});

ourServer.listen(port, () => {
  console.log("port ... ", port);
});
