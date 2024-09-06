var log=require('../tools/printLog.js');
var createFolder=require('../tools/createFolder.js');
var createFile=require('../tools/createFile.js');
var replaceContent=require('../tools/replaceContent.js');
var rename=require('../tools/rename.js');

let userPath=process.cwd()

function update(name,targetTemplate,finalFileName){
  replaceContent(userPath+'/'+name+targetTemplate,`<component name>`,name.charAt(0).toUpperCase()+name.substring(1),()=>{
    //rename
    rename(userPath+'/'+name+targetTemplate,finalFileName)
  })
}

function initChannel(name,config){
  /************************************
    Will init below file/folders in folder <component name>:

    <channel name>_index.js
    <channel name>_create.js

  **************************************/

  let componentName=name.charAt(0).toUpperCase()+name.substring(1)
  //init folder
  createFolder(userPath+'/'+name)

  //init files
  createFile(userPath+'/'+name+`/index_template.js`)
  createFile(userPath+'/'+name+`/create_template.js`)
  createFile(userPath+'/'+name+`/detail_template.js`)

  //edit files
  setTimeout(() => {
    update(name,`/index_template.js`,'index.js')
    update(name,`/create_template.js`,`create.js`)
    update(name,`/detail_template.js`,`detail.js`)
  }, 1000)
}
module.exports = initChannel;
