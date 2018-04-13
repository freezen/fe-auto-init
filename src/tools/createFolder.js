var fs = require("fs")
var path = require("path");
var log=require('./printLog.js');

function createFolder(pathName){
  if (fs.existsSync(pathName)) {
    return true;
  } else {
    if (createFolder(path.dirname(pathName))) {
      fs.mkdirSync(pathName);
      return true;
    }
  }
}
module.exports = createFolder;
