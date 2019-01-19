/************************************************************************

 *************************************************************************/
//import {getUnconfirmedList} from '../../../role_Inspector/objects/actions/index'
//import {getInstance} from '../../../role_Modeler/editModel/actions/index'

export const expandAppList =() => ({
  type: '<component name-lower>/expandAppList'
});

export const getNotificationList = (seemore,callback) => dispatch => {
  myfetch(__('viUrl') + 'notification', {
    "seemore": seemore?'true':'false'
  }, (res) => {
    if(callback){
      callback()
    }
    dispatch(expandAppList(res));
  }, (error) => {
    dispatch(expandAppList(error));
  }, 'get',true);
};
