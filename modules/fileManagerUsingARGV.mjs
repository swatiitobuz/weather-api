import * as process from "process";
import * as fs from "fs";
import { unlink } from "node:fs/promises";
import * as path from "path";

// const menu = () => {
//   console.log("press 1 to create directory");
//   console.log("press 2 to rename directory");
//   console.log("press 3 to change directory");
//   console.log("press 4 to delete directory");
//   console.log("press 5 to create a  new file");
//   console.log("press 6 to rename file");
//   console.log("press 7 to delete file");
//   console.log("press 8 to create a file inside a directory");
// };
// menu();

const input = process.argv;

const userResponse = input[3];
const updateUserResponse = input[4];
const directoryPath = path.join(userResponse, "./");

//create directory

if (input[2] == 1) {
  const createDirectory = async () => {
    try {
      if (!fs.existsSync(userResponse)) {
        fs.mkdirSync(userResponse);
        console.log(userResponse + " is created.");
      } else {
        console.log("Directory already exists.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  createDirectory();
}

//rename directory

if (input[2] == 2) {
  const renameDirectory = async () => {
    if (fs.existsSync(updateUserResponse)) {
      console.log("Folder already exists");
      return;
    } else {
      fs.rename(userResponse, updateUserResponse, function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Directory rename successful");
      });
    }
  };
  renameDirectory();
}

//change directory

if (input[2] == 3) {
  const changeDirectory = async () => {
    console.log("current working directory: " + process.cwd());
    try {
      process.chdir("../" + userResponse);
      console.log("working directory after " + "changing: " + process.cwd());
    } catch (err) {
      console.error("error occurred while " + "changing directory: " + err);
    }
  };
  changeDirectory();
}

//delete directory

if (input[2] == 4) {
  const deleteDirectory = async () => {
    fs.rmdir(userResponse, (err) => {
      if (err) {
        throw err;
      }
      console.log(`${userResponse} is deleted!`);
    });
  };
  deleteDirectory();
}

//create file

if (input[2] == 5) {
  const createFile = async () => {
    fs.writeFile(userResponse, "hi", function (err) {
      if (err) throw err;
      console.log(userResponse + " is created successfully.");
    });
  };
  createFile();
}

//rename file

if (input[2] == 6) {
  const renameFile = async () => {
    if (fs.existsSync(updateUserResponse)) {
      console.log("Folder already exists");
      return;
    } else {
      fs.rename(userResponse, updateUserResponse, function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("file renamed successfully");
      });
    }
  };
  renameFile();
}

//delete file

if (input[2] == 7) {
  const deleteFile = async () => {
    try {
      await unlink(userResponse);
      console.log("successfully deleted" + userResponse);
    } catch (error) {
      console.error("there was an error:", error.message);
    }
  };
  deleteFile();
}

//create file inside a directory

if (input[2] == 8) {
  const createFileInsideDirectory = async () => {
    fs.writeFileSync(directoryPath + updateUserResponse, "this is empty");
    console.log("file created successfully");
  };
  createFileInsideDirectory();
}
