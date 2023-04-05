const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "date_time");
const router = require('express').Router();

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

// prints date & time in DD-MM-YYYY format

const currentDate = date + "-" + month + "-" + year;

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

const currentTime = hours + ":" + minutes + ":" + seconds;

// prints date & time in DD-MM-YYYY HH:MM:SS format
const file_name =
  date + "-" + month + "-" + year + " " + hours + "-" + minutes + "-" + seconds;



  


fs.writeFile(
  `${dirPath}/${file_name}.txt`,
  `Date: ${currentDate} \n Time: ${currentTime} \n TimeStamp: ${Math.floor(
    ts / 1000
  )}`,
  function (err, data) {
    if (err) throw err;
    console.log("File is created successfully.");
  }
);



module.exports = router