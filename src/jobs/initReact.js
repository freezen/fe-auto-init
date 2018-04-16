var log=require('../tools/printLog.js');
var createFolder=require('../tools/createFolder.js');
var createFile=require('../tools/createFile.js');
var replaceContent=require('../tools/replaceContent.js');
var rename=require('../tools/rename.js');

function initReact(name,config){
  /************************************
    Will init below file/folders in folder <component name>:

    <component name>.js
    <component name>.css (use CSS Modules)
    /child

  **************************************/

  let userPath=process.cwd()
  let componentName=name.charAt(0).toUpperCase()+name.substring(1)

  //init folder
  createFolder(userPath+'/'+name)
  createFolder(userPath+'/'+name+'/child')

  //init files
  createFile(userPath+'/'+name+`/Template_component_react.js`)
  createFile(userPath+'/'+name+`/Template_component.modules.css`)

  //edit files
  replaceContent(userPath+'/'+name+`/Template_component_react.js`,`<component name>`,componentName,()=>{
    //rename
    rename(userPath+'/'+name+`/Template_component_react.js`,componentName+".js")
  })
  replaceContent(userPath+'/'+name+`/Template_component.modules.css`,`<component name>`,componentName,()=>{
    //rename
    rename(userPath+'/'+name+`/Template_component.modules.css`,componentName+".modules.css")
  })
}
module.exports = initReact;
