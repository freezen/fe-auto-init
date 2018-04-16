/************************************************************************

 *************************************************************************/
import {
  combineReducers
} from 'redux-immutable';

import root from '../components/root/reducers/index';
import header from '../components/common/header/reducers/index';
import dataPanel from '../components/common/dataPanel/reducers/index';

const app = combineReducers({
  root,
  header,
  dataPanel,
});


export default app;
