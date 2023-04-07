const n = require('./files');

// return n;

const router = require('express').Router();
const path = require("path");
const dirPath = path.join(__dirname, "date_time");

router.get('/', function(req, res){
    // res.send(n);
    res.sendFile(dirPath + "/" + "7-4-2023 17-3-5.txt" )
    
});

module.exports = router;

