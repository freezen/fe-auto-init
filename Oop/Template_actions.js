/************************************************************************
 Licensed Materials - Property of IBM
 IBM IoT for Manufacturing
 © Copyright IBM Corp. 2017, 2018 All Rights Reserved.
 US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *************************************************************************/
import {getUnconfirmedList} from '../../../role_Inspector/objects/actions/index'
import {getInstance} from '../../../role_Modeler/editModel/actions/index'

export const expandAppList =() => ({ type: 'header/expandAppList' });
export const expandData =() => ({ type: 'root/expandData' });

export const expandUserInfo = (isCanceled) => ({
  type : 'header/expandUserInfo',
  payload : {
    isCanceled : isCanceled
  },
  meta : 'Expand user info menu.'
});

export const getNotificationList = (seemore,callback) => dispatch => {
  myfetch(__('viUrl') + 'notification', {
    "seemore": seemore?'true':'false'
  }, (res) => {
    if(callback){
      callback()
    }
    dispatch(getNotificationList_1(res));
  }, (error) => {
    dispatch(getNotificationList_2(error));
  }, 'get',true);
};
export const getNotificationList_1 =(data) => (
  {
    type: 'header/getNotificationList_1',
    data:data,
  }
)
export const getNotificationList_2 =(error) => (
  {
    type: 'header/getNotificationList_2' ,
    msg:error,
  }
)

export const refreshObjectList =(cellId) => dispatch => {
  dispatch(getUnconfirmedList(cellId))
}
export const refreshVersion =(instanceId) => dispatch => {
  dispatch(getInstance(instanceId))
}
