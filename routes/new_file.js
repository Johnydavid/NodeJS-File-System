const router = require('express').Router();
const path = require("path");
const dirPath = path.join(__dirname, "date_time");

router.get('/', function(req, res){
    res.sendFile(dirPath + "/" + "3-4-2023 10-11-26.txt" )
});

module.exports = router;

