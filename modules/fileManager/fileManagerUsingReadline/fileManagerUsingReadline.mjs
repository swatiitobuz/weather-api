import { createInterface } from "readline";
import * as operations from "./operationsForReadline.mjs";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const readLineAsync = (msg) => {
  return new Promise((resolve) => {
    readline.question(msg, (userRes) => {
      resolve(userRes);
    });
  });
};

console.log("Press 1 to created a directory");
console.log("Press 2 to change directory");
console.log("Press 3 to delete directory");
console.log("Press 4 to rename directory");
console.log("Press 5 to create a file");
console.log("Press 6 to rename a file");
console.log("Press 7 to delete file");
console.log("Press 8 to create a file inside a directory");
console.log("Press 9 to delete a file inside a directory");
console.log("Enter 0 to exit");

//user input
export const getUserInput = () => {
  readline.setPrompt("Enter a number ");
  readline.prompt();
  fileManager();
};
getUserInput();

export function fileManager() {
  readline.on("line", (inputValue) => {
    //create directory
    const inputNumber = Number(inputValue);
    if (inputNumber === 1) {
      operations.createDirectory();
    }

    // change directory
    else if (inputNumber === 2) {
      operations.readDirectory();
    }

    //delete directory
    else if (inputNumber === 3) {
      operations.deleteDirectory();
    }

    //rename directory
    else if (inputNumber === 4) {
      operations.renameDirectory();
    }

    //create file
    else if (inputNumber === 5) {
      operations.createFile();
    }

    //rename file
    else if (inputNumber === 6) {
      operations.renameFile();
    }

    //delete file
    else if (inputNumber === 7) {
      operations.deleteFile();
    }

    //create file inside directory
    else if (inputNumber === 8) {
      operations.createFileInsideDirectory();
    }
    //delete file inside directory
    else if(inputNumber === 9){
      operations.deleteFileInsideDirectory();
    }

    // exit
    else if (inputNumber === 0) {
      readline.close();
    }

    //for other inputs
    else {
      console.log("Please enter the correct input!!!");
      getUserInput();
    }
  });
}
