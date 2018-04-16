var fs = require("fs")
var path = require("path");

var log=require('./printLog.js');

function rename(pathName,value){
  var names=pathName.split('/')
  let fileName=names[names.length-1]
  let l=fileName.length
  let newPath=pathName.substring(0,pathName.length-l)+value

  fs.rename(pathName, newPath, function(e) {
    if (e) {
      log(e)
    }
  });
}
module.exports = rename;
