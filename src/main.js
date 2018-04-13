var log=require('./tools/printLog.js');

var config=require('../config.js');

var initProject=require('./jobs/initProject.js');
var initReact=require('./jobs/initReact.js');
var initRedux=require('./jobs/initRedux.js');

function Main() {
  const name=process.argv[2]
  const paramater=process.argv[3]==undefined?undefined:process.argv[3].split('-')[1]
  if(paramater==''){
    paramater=undefined
  }
  /*
    command line:
      node index <component name> <-x:if make a redux component>
  */
  if(name==undefined){
    //init project
    initProject(config.jobs.project)
  }else if(paramater==undefined){
    //init react component
    initReact(name,config)
  }else if(paramater){
    //init react component
    initRedux(name,config)
  }

  log('Something is complete !');
};
module.exports = Main;
