// import * as data from "./weatherDb.mjs";
import * as fs from "fs";

let weatherArray = "";

try {
  var resultOfRead = fs.readFileSync("./weatherDatabase.txt");
  weatherArray = JSON.parse(resultOfRead);
  // console.log(weatherArray);
} catch (err) {
  console.log(err);
}
var myData = {
  name: "",
  tempC: "0",
  tempF: "0",

  condition: {
    Text: "",
    humidity: "0",
    feelsLikeC: "0",
    feelsLikeF: "0",
  },
};

//adddata

function addData(cityName) {
  myData.name = cityName;
  weatherArray.push(myData);
}
addData("india");
console.log(weatherArray);

// updateData

function updateData(cityName, updatedTempC, updatedTempF, text) {
  let getData = weatherArray.find((o) => o.name === cityName);
  getData.tempC = updatedTempC;
  getData.tempF = updatedTempF;
  getData.condition.Text = text;
}
updateData("india", "32.0", "81.0", "windy");
console.log(weatherArray);

//deletedata

function deleteData(cityName) {
  let cityIndex = weatherArray.findIndex((o) => o.name === cityName);
  weatherArray.splice(cityIndex, 1);
}
deleteData("india");
console.log(weatherArray);

//writeData
function createData() {
  fs.writeFileSync(
    "weatherDatabase.txt",
    JSON.stringify(weatherArray),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Data Updated!");
      }
    }
  );
}
createData();
