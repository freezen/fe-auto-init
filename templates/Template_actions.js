/************************************************************************
 Licensed Materials - Property of IBM
 IBM IoT for Manufacturing
 © Copyright IBM Corp. 2017, 2018 All Rights Reserved.
 US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *************************************************************************/
import {getUnconfirmedList} from '../../../role_Inspector/objects/actions/index'
import {getInstance} from '../../../role_Modeler/editModel/actions/index'

export const expandAppList =() => ({
  type: '<component name>/expandAppList'
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
