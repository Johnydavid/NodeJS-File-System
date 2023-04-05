const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "date_time");
const router = require('express').Router();


//passsing directoryPath and callback function
fs.readdir(dirPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});

module.exports = router


