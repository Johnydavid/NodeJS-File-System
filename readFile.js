const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "date_time");
const router = require("express").Router();

//passsing directoryPath and callback function
function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}
router.get("/", function (req, res) {
  var data = getFiles(dirPath);

  
  console.log(getFiles(dirPath));
  res.send(data);
});

module.exports = router;
