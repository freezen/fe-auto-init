/************************************************************************

 *************************************************************************/
import Immutable from 'immutable';

const initialState =Immutable.fromJS({
  expandAppList: false,
  expandData: false,
})


const <component name> = (state = initialState, action) => {
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
