import * as operations from "./operationsForARGV.mjs";
import * as path from "path";
const input = process.argv;
const userResponse = input[3] || "";
const updateUserResponse = input[4];


// create directory

if (input[2] === "1") {
  operations.createDirectory(userResponse);
}

//rename directory
else if (input[2] === "2") {
  operations.renameDirectory(userResponse, updateUserResponse);
}

//change directory
else if (input[2] === "3") {
  operations.changeDirectory();
}

//delete directory
else if (input[2] === "4") {
  operations.deleteDirectory(userResponse);
}

//create file
else if (input[2] === "5") {
  operations.createFile(userResponse);
}

//rename file
else if (input[2] === "6") {
  operations.renameFile(userResponse, updateUserResponse);
}

//delete file
else if (input[2] === "7") {
  operations.deleteFile(userResponse);
}

//create file inside a directory
else if (input[2] === "8") {
  operations.createFileInsideDirectory(userResponse, updateUserResponse);
}

//menu
else if (input[2] === undefined) {
  operations.menu(userResponse);
}

//other inputs
else {
  console.log("please Enter the proper command to execute operations");
}
