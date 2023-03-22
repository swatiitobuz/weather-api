import * as fs from "fs";
import { createInterface } from "readline";
import * as process from "process";
import { unlink } from "node:fs/promises";
import * as path from "path";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = (msg) => {
  return new Promise((resolve) => {
    readline.question(msg, (userRes) => {
      resolve(userRes);
    });
  });
};

console.log("press 1 to created a directory");
console.log("press 2 to change directory");
console.log("press 3 to delete directory");
console.log("press 4 to rename directory");
console.log("press 5 to create a file");
console.log("press 6 to rename a file");
console.log("press 7 to delete file");
console.log("press 8 to create a file inside a directory");
console.log("enter 0 to exit");

readline.setPrompt("enter a number ");
readline.prompt();
fileManager();

function fileManager() {
  readline.on("line", (inputValue) => {
    //created directory

    if (inputValue === "1") {
      const createDirectory = async () => {
        const userResponse = await readLineAsync("please create a directory ");
        try {
          if (!fs.existsSync(userResponse)) {
            fs.mkdirSync(userResponse);
            console.log(userResponse + " is created.");
            readline.setPrompt("enter a number ");
            readline.prompt();
            fileManager();
          } else {
            console.log("Directory already exists.");
            readline.setPrompt("enter a number ");
            readline.prompt();
            fileManager();
          }
        } catch (err) {
          console.log(err);
        }
      };
      createDirectory();
    }

    // change directory
    else if (inputValue === "2") {
      const changeDirectory = async () => {
        const userResponse = await readLineAsync(
          "enter the directory to be changed "
        );
        console.log("current working directory: " + process.cwd());
        try {
          process.chdir("./" + userResponse);
          console.log(
            "working directory after " + "changing: " + process.cwd()
          );
          readline.setPrompt("enter a number ");
          readline.prompt();
          fileManager();
        } catch (err) {
          console.error("error occurred while " + "changing directory: " + err);
        }
      };
      changeDirectory();
    }

    //delete directory
    else if (inputValue === "3") {
      const deleteDirectory = async () => {
        const userResponse = await readLineAsync(
          "please enter the directory to be deleted "
        );
        fs.rmdir(userResponse, (err) => {
          if (err) {
            throw err;
          }
          console.log(`${userResponse} is deleted!`);
          readline.setPrompt("enter a number ");
          readline.prompt();
          fileManager();
        });
      };
      deleteDirectory();
    }

    //rename directory
    else if (inputValue === "4") {
      const renameDirectory = async () => {
        const oldDirectory = await readLineAsync(
          "please enter old directory name "
        );
        const newDirectory = await readLineAsync(
          "please enter new directory name "
        );
        if (fs.existsSync(newDirectory)) {
          console.log("Folder already exists");
          return;
        } else {
          fs.rename(oldDirectory, newDirectory, function (err) {
            if (err) {
              console.log(err);
              return;
            }
            console.log("Directory rename successful");
            readline.setPrompt("enter a number ");
            readline.prompt();
            fileManager();
          });
        }
      };
      renameDirectory();
    }

    //create file
    else if (inputValue === "5") {
      const createFile = async () => {
        const userResponse = await readLineAsync("please enter file name ");
        fs.writeFile(userResponse, "hi", function (err) {
          if (err) throw err;
          console.log(userResponse + "is created successfully.");
          readline.setPrompt("enter a number ");
          readline.prompt();
          fileManager();
        });
      };
      createFile();
    }

    //rename file
    else if (inputValue === "6") {
      const renameFile = async () => {
        const oldFilename = await readLineAsync("please enter old file name ");
        const newFilename = await readLineAsync("please enter new file name ");
        if (fs.existsSync(newFilename)) {
          console.log("Folder already exists");
          return;
        } else {
          fs.rename(oldFilename, newFilename, function (err) {
            if (err) {
              console.log(err);
              return;
            }
            console.log("file rename successful");
            readline.setPrompt("enter a number ");
            readline.prompt();
            fileManager();
          });
        }
      };
      renameFile();
    }

    //delete file
    else if (inputValue === "7") {
      const deleteFile = async () => {
        const userResponse = await readLineAsync(
          "please enter file name to be deleted "
        );
        try {
          await unlink(userResponse);
          console.log("successfully deleted" + userResponse);
          readline.setPrompt("enter a number ");
          readline.prompt();
          fileManager();
        } catch (error) {
          console.error("there was an error:", error.message);
        }
      };
      deleteFile();
    }

    //create file inside directory
    else if (inputValue === "8") {
      const createFileInsideDirectory = async () => {
        const directoryName = await readLineAsync(
          "please enter directory name "
        );
        const fileName = await readLineAsync("please enter file name ");
        const directoryPath = path.join(directoryName, "./");
        fs.writeFileSync(directoryPath + fileName, "this is empty");
        console.log("file created successfully");
        readline.setPrompt("enter a number ");
        readline.prompt();
        fileManager();
      };
      createFileInsideDirectory();
    }

    // exit
    else if (inputValue === "0") {
      readline.close();
    } else {
      console.log("please enter the correct input");
      readline.setPrompt("enter a number ");
      readline.prompt();
      fileManager();
    }
  });
}
