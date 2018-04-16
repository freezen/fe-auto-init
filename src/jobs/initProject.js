var log=require('../tools/printLog.js');
var createFolder=require('../tools/createFolder.js');
var createFile=require('../tools/createFile.js');

function initProject(config){
  /************************************
    Will init below file/folders:

    package.json
    webpack.config.js
    index.html
    /src
    /images
    /css
    /fonts
    /libs
    /tools
    /js
    /i18n
    /test

  **************************************/
  let userPath=process.cwd()
  //init folders
  config.folders.forEach((item)=>{
    if(item!=undefined&&item!=''){
      createFolder(userPath+'/'+item)
    }
  })

  //init files, pure copy from templates
  config.files.forEach((item)=>{
    if(item!=undefined&&item!=''){
      createFile(userPath+'/'+item)
    }
  })
}
module.exports = initProject;
