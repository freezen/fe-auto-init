/************************************************************************
 Licensed Materials - Property of IBM
 IBM IoT for Manufacturing
 © Copyright IBM Corp. 2017, 2018 All Rights Reserved.
 US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *************************************************************************/
import Immutable from 'immutable';

const initialState =Immutable.fromJS({
  expandAppList: false,
  expandData: false,
})


const <componant name> = (state = initialState, action) => {
  if(action.type.split('/')[0].indexOf('<component name>')==-1){
    return state
  }
  switch (action.type.split('/')[1]) {
    case 'expandData':
      return return state.set('expandData',!state.get('expandData'))
    default:
      return state
  }
}

export default <component name>
