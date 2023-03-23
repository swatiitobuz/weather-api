import * as process from "process";
import * as fs from "fs";
import * as path from "path";
import { unlink } from "node:fs/promises";

//menu

export const menu = (userResponse) => {
  console.log("Press 1 to create directory");
  console.log("Press 2 to rename directory");
  console.log("Press 3 to change directory");
  console.log("Press 4 to delete directory");
  console.log("Press 5 to create a  new file");
  console.log("Press 6 to rename file");
  console.log("Press 7 to delete file");
  console.log("Press 8 to create a file inside a directory");
};

//create directory

export const createDirectory = async (userResponse) => {
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

//rename directory

export const renameDirectory = async (userResponse, updateUserResponse) => {
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

//change directory

export const changeDirectory = async (userResponse) => {
  console.log("current working directory: " + process.cwd());
  try {
    process.chdir("../" + userResponse);
    console.log("working directory after " + "changing: " + process.cwd());
  } catch (err) {
    console.error("error occurred while " + "changing directory: " + err);
  }
};

//delete directory

export const deleteDirectory = async (userResponse) => {
  fs.rmdir(userResponse, (err) => {
    if (err) {
      throw err;
    }
    console.log(`${userResponse} is deleted!`);
  });
};

//create file
export const createFile = async (userResponse) => {
  fs.writeFile(userResponse, "hi", function (err) {
    if (err) throw err;
    console.log(userResponse + " is created successfully.");
  });
};

//rename file

export const renameFile = async (userResponse, updateUserResponse) => {
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

//delete file

export const deleteFile = async (userResponse) => {
  try {
    await unlink(userResponse);
    console.log("successfully deleted" + userResponse);
  } catch (error) {
    console.error("there was an error: ", error.message);
  }
};

//create file inside a directory

export const createFileInsideDirectory = async (userResponse, updateUserResponse) => {
  const directoryPath = path.join(userResponse, "./");
  try {
    fs.writeFileSync(directoryPath + updateUserResponse, "this is empty");
    console.log("file created successfully");
  } catch (e) {
    console.error(e);
  }
};
