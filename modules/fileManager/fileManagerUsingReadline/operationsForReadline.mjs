import * as fs from "fs";
import * as fsPromise from "fs/promises";
import * as process from "process";
import { unlink } from "node:fs/promises";
import * as path from "path";
import * as operations from "./fileManagerUsingReadline.mjs";


//create directory

export const createDirectory = async () => {
  const userResponse = await operations.readLineAsync(
    "Please create a directory "
  );

  try {
    if (!fs.existsSync(userResponse)) {
      fsPromise.mkdir(userResponse).then(() => {
        console.log(userResponse + " is created.");
        operations.getUserInput();
      }).catch(() => {
        console.log("failed to create " + userResponse);
        operations.getUserInput();
      })
    } else {
      console.log("Directory already exists.");
      operations.getUserInput();
    }
  } catch (err) {
    console.log(err);
  }
};

//change directory

export const readDirectory = async () => {
  const userResponse = await operations.readLineAsync(
    "Enter the directory to be read "
  );
    const targetDir = userResponse || process.cwd();
    fs.promises.readdir(targetDir).then(fileNames =>{
      for(let fileName of fileNames){
        console.log("files are: " + fileName);
      }
      console.log("File read successfully");
      operations.getUserInput();
    })
    .catch(err => {
      console.log(err);
    })
  };
  

//delete directory

export const deleteDirectory = async () => {
  const userResponse = await operations.readLineAsync(
    "please enter the directory to be deleted "
  );
  fs.rmdir(userResponse, (err) => {
    if (err) {
      throw err;
    }
    console.log(`${userResponse} is deleted!`);
    operations.getUserInput();
  });
};

//rename directory

export const renameDirectory = async () => {
  const oldDirectory = await operations.readLineAsync(
    "Please enter old directory name "
  );
  const newDirectory = await operations.readLineAsync("Please enter new directory name ");
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
      operations.getUserInput();
    });
  }
};

//create file

export const createFile = async () => {
  const userResponse = await operations.readLineAsync(
    "Please enter file name "
  );
  fs.writeFile(userResponse, "hi", function (err) {
    if (err) throw err;
    console.log(userResponse + "is created successfully.");
    operations.getUserInput();
  });
};

//rename file

export const renameFile = async () => {
  const oldFilename = await operations.readLineAsync(
    "Please Enter old file name "
  );
  const newFilename = await operations.readLineAsync(
    "Please Enter new file name "
  );
  if (fs.existsSync(newFilename)) {
    console.log("Folder already exists");
    return;
  } else {
    fs.rename(oldFilename, newFilename, function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("File rename successful");
      operations.getUserInput();
    });
  }
};

//delete file

export const deleteFile = async () => {
  const userResponse = await operations.readLineAsync(
    "Please enter file name to be deleted "
  );
  try {
    await unlink(userResponse);
    console.log("Successfully deleted " + userResponse);
    operations.getUserInput();
  } catch (error) {
    console.error("There was an error: ", error.message);
  }
};

//create file inside a directory

export const createFileInsideDirectory = async () => {
  const directoryName = await operations.readLineAsync("Please enter directory name ");
  const fileName = await operations.readLineAsync("Please enter file name ");
  const directoryPath = path.join(directoryName, "./");
  fs.writeFile(directoryPath + fileName, "hi", function (err) {
    if (err) throw err;
    console.log(fileName + " is created successfully.");
    operations.getUserInput();
  });
  console.log("File created successfully");
  operations.getUserInput();
};
