var fs = require("fs")
var path = require("path");

var log=require('./printLog.js');

function replaceContent(pathName,target,value,callback){
  var names=pathName.split('/')
  let fileName=names[names.length-1]
  var sourceFile = path.join(path.resolve(__dirname, '../..')+'/templates/', fileName);



  fs.readFile(sourceFile, {flag: 'r+', encoding: 'utf8'}, function (err, data) {
    if(err) {
      log(err);
      return;
    }
    fs.writeFile(pathName, data.replace(/\<component name\>/g,value), {flag: 'w'}, function (err) {
      if(err) {
        log(err);
      } else {
        if(callback!=undefined){
          callback()
        }
      }
    });
  });



  // var readStream = fs.createReadStream(sourceFile);
  // readStream.on('error', function(e) {
  //   if (e!=undefined) {
  //     log('Read file error'+ e)
  //   }
  // })
  //
  // var writeStream = fs.createWriteStream(pathName);
  // writeStream.on('error', function(e) {
  //   if (e!=undefined) {
  //     log('Write file error'+ e)
  //   }
  // })
  //
  // writeStream.on('close', function(e) {
  //
  // })
  //
  // readStream.pipe(writeStream);
}
module.exports = replaceContent;
