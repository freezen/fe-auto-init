var log=require('../tools/printLog.js');
var createFolder=require('../tools/createFolder.js');
var createFile=require('../tools/createFile.js');
var replaceContent=require('../tools/replaceContent.js');
var rename=require('../tools/rename.js');

function initReact(name,config){
  /************************************
    Will init below file/folders in folder <component name>:

    <component name>_Home.js
    <component name>.js
    <component name>.css (use CSS Modules)
    /child

  **************************************/

  let userPath=process.cwd()
  name=name.charAt(0).toUpperCase()+name.substring(1)
  //init folder
  createFolder(userPath+'/'+name)
  //init files
  createFile(userPath+'/'+name+`/Template_home.js`)
  createFile(userPath+'/'+name+`/Template_reducers.js`)
  createFile(userPath+'/'+name+`/Template_actions.js`)
  createFile(userPath+'/'+name+`/Template_component.js`)
  //edit files
  replaceContent(userPath+'/'+name+`/Template_home.js`,`<component name>`,name)
  replaceContent(userPath+'/'+name+`/Template_reducers.js`,`<component name>`,name)
  replaceContent(userPath+'/'+name+`/Template_actions.js`,`<component name>`,name)
  replaceContent(userPath+'/'+name+`/Template_component.js`,`<component name>`,name)
  //rename
  // rename(userPath+'/'+name+`/Template_home.js`,`<component name>`,name)
  // rename(userPath+'/'+name+`/Template_home.js`,`<component name>`,name)
  // rename(userPath+'/'+name+`/Template_home.js`,`<component name>`,name)
  // rename(userPath+'/'+name+`/Template_home.js`,`<component name>`,name)

}
module.exports = initReact;
