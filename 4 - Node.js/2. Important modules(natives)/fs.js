const path = require("path");
const fs = require("fs");

//Create dir
fs.mkdir(path.join(__dirname, "/test"), function(error) {
    if(error) {
        return console.log("Error", error);
    }
    else {
        console.log("Dir created!")
    }
});

//Create/recreate file
fs.writeFile(path.join(__dirname, "/test", "test.txt"), "", function(error) {
    if(error) {
        return console.log("Error", error);
    }
    else {
        console.log("File created!")
    }
});

//Append in file
fs.appendFile(path.join(__dirname, "/test", "test.txt"), "test", function(error) {
    if(error) {
        return console.log("Error", error);
    }
    else {
        console.log("File modified!")
    }
});

//Read file
fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf8", function(error, data) {
    if(error) {
        return console.log("Error", error);
    }
    else {
        console.log("File data:")
        console.log(data)
    }
});